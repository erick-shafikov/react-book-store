import { TQuery } from '../../api/types';
import { TBook } from '../../hooks/types';
import { genre, sortBy } from '../../constants.ts/searchParams';

export type TBooksState = {
    books: { [key: string]: TBook };
    error: string | null;
    isLoaded: boolean;
    totalItems: number;
    searchParams: TQuery;
    loadMoreisAcive: boolean;
    uniqIds: { [key: string]: boolean };
    genre: typeof genre;
    category: typeof sortBy;
};
