import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { genre, sortBy } from '../../constants.ts/searchParams';

import { initialFetchBooks, loadMore } from '../thunks/booksThunks';
import { TBooksState } from './types';

const booksSlice = createSlice({
    name: 'books',

    initialState: {
        books: {},
        isLoaded: false,
        error: null,
        totalItems: 0,
        searchParams: {
            searchString: 'react',
            category: '',
            startFrom: 0,
            sortBy: 'relevance',
        },
        loadMoreisAcive: true,
        uniqIds: {},
        genre: genre,
        category: sortBy,
    } as TBooksState,

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initialFetchBooks.fulfilled, (state, action) => {
                state.error = null;
                state.books = {};
                state.searchParams = action.payload.initialArguments;
                const books = state.books;

                if (action.payload.totalItems === 0) {
                    state.error = 'no results';
                    return;
                }
                action.payload.items.forEach((item) => (books[item.id] = item));
                state.totalItems = action.payload.totalItems;
                state.isLoaded = true;
            })
            .addCase(initialFetchBooks.pending, (state) => {
                state.isLoaded = false;
            })
            .addCase(loadMore.fulfilled, (state, action) => {
                const books = state.books;
                action.payload.items.filter((item) => {
                    books[item.id] = item;
                });

                state.searchParams.startFrom = action.payload.newPageNum;
                state.isLoaded = true;
            })
            .addMatcher(
                (action: AnyAction) => action.type.endsWith('rejected'),
                (state, action: PayloadAction<string>) => {
                    state.error = action.payload;
                    state.isLoaded = true;
                }
            );
    },
});

export default booksSlice.reducer;
