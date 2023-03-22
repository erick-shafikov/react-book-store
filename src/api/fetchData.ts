import { queryConstructor } from './queryContructor';
import { TQuery } from './types';

export async function fetchData(props: TQuery) {
    try {
        const res = await fetch(queryConstructor(props));

        if (res.status === 200) {
            const json = res.json();

            return json;
        } else {
            throw new Error('error');
        }
    } catch (e) {
        throw e;
    }
}
