import { sortBy } from '../constants.ts/searchParams';

export type TQuery = {
    searchString?: string;
    category?: string;
    startFrom: number;
    sortBy: typeof sortBy[number];
};
