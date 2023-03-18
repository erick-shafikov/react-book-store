import React from 'react';
import { BookImageContainer, BookImg } from './styled';
import temp from '../../../../public/boooktemp.png';

export const BookImage = () => {
    return (
        <BookImageContainer>
            <BookImg src={temp} />
        </BookImageContainer>
    );
};
