import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TBook } from '../../hooks/types';
import { fetchBookItem } from '../thunks/bookItemThunks';
import { TBookItemState } from './types';

const booksSlice = createSlice({
    name: 'bookItem',

    initialState: {
        book: {},
        isLoading: false,
    } as TBookItemState,

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookItem.fulfilled, (state, action) => {
                state.book = action.payload as unknown as TBook;
                state.isLoading = false;
            })
            .addCase(fetchBookItem.pending, (state) => {
                state.isLoading = true;
            })
            .addMatcher(
                (action: AnyAction) => action.type.endsWith('rejected'),
                (state, action: PayloadAction<string>) => {}
            );
    },
});

export default booksSlice.reducer;
