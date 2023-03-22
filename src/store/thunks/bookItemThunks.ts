import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBook } from '../../api/fetchBook';
import { TBook } from '../../hooks/types';

export const fetchBookItem = createAsyncThunk<
    { book: TBook },
    string,
    { rejectValue: string }
>('bookItem/fetchBookItem', async function (link, { rejectWithValue }) {
    //TODO Обработка ошибок
    try {
        const book = await fetchBook(link);

        return book;
    } catch (e) {
        console.log(e);
        rejectWithValue(e as string);
    }
});
