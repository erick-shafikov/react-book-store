import { BOOK_CNT, DEFAULT_SEACRH_STRING } from '../constants.ts/searchParams';
import { TQuery } from './types';

const book_api_token = 'AIzaSyBMYIWUdKyZRgVFlZBTi--mx4gcdnFSb9M';

console.log(import.meta.env.VITE_API_GOOGLE_TOKEN);

export function queryConstructor(params = {} as TQuery) {
    const {
        searchString = DEFAULT_SEACRH_STRING,
        category,
        startFrom = 0,
        sortBy = 'newest',
    } = params;

    console.log();

    const query = searchString;
    const subject = category !== 'all' && category ? `subject:${category}` : '';
    const startIndex = `&startIndex=${startFrom * BOOK_CNT}`;
    const maxResult = `&maxResults=${BOOK_CNT}`;
    const sorting = `&orderBy=${sortBy}`;
    const token = `&key=${book_api_token}`;

    return (
        'https://www.googleapis.com/books/v1/volumes?q=' +
        query +
        '+' +
        subject +
        startIndex +
        maxResult +
        sorting +
        '&projection=lite' +
        token
    );
}
