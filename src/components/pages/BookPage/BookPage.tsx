import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getBookState } from '../../../store/bookItemSlice/selectors';
import { fetchBookItem } from '../../../store/thunks/bookItemThunks';
import { BookImage } from '../../atoms/bookImage';

import { BookDescription } from '../../organisms/bookDescription';
import { Styled } from './styled';

export const BookPage = () => {
    //унести в отдельный хук
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const book = useAppSelector(getBookState);

    useEffect(() => {
        dispatch(
            fetchBookItem('https://www.googleapis.com/books/v1/volumes/' + id)
        );
    }, []);

    return (
        <Styled>
            <BookImage height="450px" width="400px" />
            <BookDescription
                title={book.volumeInfo?.title}
                author={book.volumeInfo?.authors?.[0]}
                description={book.volumeInfo?.description}
            />
        </Styled>
    );
};
