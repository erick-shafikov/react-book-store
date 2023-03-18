import React from 'react';
import { BookImage } from '../../atoms/bookImage';

import { BookDescription } from '../../organisms/bookDescription';
import { Styled } from './styled';

export const BookPage = () => {
    return (
        <Styled>
            BookPage
            <BookImage />
            <BookDescription />
        </Styled>
    );
};
