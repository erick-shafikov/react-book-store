import { configureStore } from '@reduxjs/toolkit';

import booksSlice from './booksSlice/slice';
import bookItemSlice from './bookItemSlice/slice';

export const store = configureStore({
    reducer: {
        books: booksSlice,
        bookItem: bookItemSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
