import { createAsyncThunk } from '@reduxjs/toolkit';

import { TBook } from '../../hooks/types';
import { fetchData } from '../../api/fetchData';
import { TBooksState } from '../booksSlice/types';
import { TQuery } from '../../api/types';

export const initialFetchBooks = createAsyncThunk<
    { items: TBook[]; totalItems: number; initialArguments: TQuery },
    TQuery,
    { rejectValue: string }
>(
    'booklist/initialFetchBooks',
    async function (initialArguments, { rejectWithValue }) {
        try {
            const books = await fetchData(initialArguments);
            const totalItmes = books.totalItems;
            return { ...books, totalItmes, initialArguments };
        } catch (e) {
            rejectWithValue(e as string);
        }
    }
);

export const loadMore = createAsyncThunk<
    { items: TBook[]; newPageNum: number },
    undefined,
    { rejectValue: string; state: { books: TBooksState } }
>('booklist/loadMore', async function (_, { rejectWithValue, getState }) {
    const newPageNum = getState().books.searchParams.startFrom + 1;
    const { items } = await fetchData({
        ...getState().books.searchParams,
        startFrom: newPageNum,
    });
    return { items, newPageNum };
});
