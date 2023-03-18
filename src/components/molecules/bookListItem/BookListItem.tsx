import React from 'react';
import {
    BookTitle,
    BookListItemWrapper,
    StyledCategory,
    AuthorName,
} from './styled';
import { BookImage } from '../../atoms/bookImage';
import { TBookListItemProps } from './types';

export const BookListItem = ({
    boookTitle,
    category,
    author,
}: TBookListItemProps) => {
    return (
        <BookListItemWrapper>
            <BookImage />
            <StyledCategory>{category}</StyledCategory>
            <BookTitle>{boookTitle}</BookTitle>
            <AuthorName>{author}</AuthorName>
        </BookListItemWrapper>
    );
};
