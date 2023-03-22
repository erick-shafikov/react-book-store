import React from 'react';
import { BookImageContainer, BookImg } from './styled';
import { TBookImageProps } from './types';

export const BookImage = ({
    width = '160px',
    height = '240px',
    src = '/boooktemp.png',
}: TBookImageProps) => {
    return (
        <BookImageContainer width={width} height={height}>
            <BookImg src={src} width={width} height={height} />
        </BookImageContainer>
    );
};
