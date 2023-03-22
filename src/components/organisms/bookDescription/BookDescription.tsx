import React from 'react';
import { BookDetails } from './styled';
import { TBookDescription } from './types';

export const BookDescription = ({
    title,
    author,
    description,
}: TBookDescription) => {
    const html = { __html: description };
    return (
        <BookDetails>
            <h2>{title}</h2>
            <div>{author}</div>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </BookDetails>
    );
};
