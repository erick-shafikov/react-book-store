import React from 'react';
import { BookImageContainer, BookImg } from './styled';
import { TBookImageProps } from './types';

export const BookImage = ({
    width = '180px',
    height = '240px',
    src = '/boooktemp.png',
    loading,
}: TBookImageProps) => {
    return (
        <BookImageContainer width={width} height={height}>
            {!loading && <BookImg src={src} width={width} height={height} />}
        </BookImageContainer>
    );
};
