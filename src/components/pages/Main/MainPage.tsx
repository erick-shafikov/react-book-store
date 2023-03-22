import { useEffect } from 'react';
import {
    getBooksState,
    getErrorState,
    getIsLoadedState,
    getTotalItemsState,
    initialFetchBooks,
    loadMore,
    useAppDispatch,
    useAppSelector,
} from '../../../store';
import { BookList } from '../../organisms/booklist';
import { Styled } from './styled';

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const books = useAppSelector(getBooksState);
    const isLoaded = useAppSelector(getIsLoadedState);
    const totalItems = useAppSelector(getTotalItemsState);
    const error = useAppSelector(getErrorState);

    useEffect(() => {
        dispatch(
            initialFetchBooks({
                startFrom: 0,
                sortBy: 'newest',
            })
        );
    }, []);

    return (
        <Styled>
            {error ? (
                <>{error}</>
            ) : (
                <BookList
                    books={books}
                    isLoaded={isLoaded}
                    totalItems={totalItems}
                />
            )}
        </Styled>
    );
};
