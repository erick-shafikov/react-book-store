import React from 'react';
import { BookListItem } from '../../molecules/bookListItem';
import { GridList } from './styled';

const tempBooklist = [
    'book1',
    'book2',
    'book3',
    'book4',
    'book5',
    'book6',
    'book7',
    'book8',
    'book9',
    'book10',
    'book11',
    'book12',
];

export const BookList = () => {
    return (
        <>
            found{tempBooklist.length}results
            <GridList>
                {tempBooklist.map((item) => (
                    <BookListItem
                        boookTitle={item}
                        key={item}
                        category={'computers'}
                        author={'author'}
                    />
                ))}
            </GridList>
        </>
    );
};
