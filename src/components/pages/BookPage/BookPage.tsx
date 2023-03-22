import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import {
    getBookLoadingSatus,
    getBookState,
} from '../../../store/bookItemSlice/selectors';
import { fetchBookItem } from '../../../store/thunks/bookItemThunks';
import { BookImage } from '../../atoms/bookImage';

import { BookDescription } from '../../organisms/bookDescription';
import { Styled } from './styled';

export const BookPage = () => {
    //унести в отдельный хук
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const book = useAppSelector(getBookState);
    const loading = useAppSelector(getBookLoadingSatus);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(
            fetchBookItem('https://www.googleapis.com/books/v1/volumes/' + id)
        );
    }, []);

    return (
        <Styled>
            <BookImage
                height="450px"
                width="350px"
                src={book.volumeInfo?.imageLinks?.thumbnail}
                loading={loading}
            />
            <BookDescription
                title={book.volumeInfo?.title}
                authors={book.volumeInfo?.authors}
                description={book.volumeInfo?.description}
            />
        </Styled>
    );
};
