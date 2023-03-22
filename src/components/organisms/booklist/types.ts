import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TBook } from '../../../hooks/types';

export type BookListProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    books: TBook[];
    isLoaded: boolean;
    onClickHandler?: () => void;
    totalItems: number;
};
