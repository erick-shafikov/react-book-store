import {
    getBooksState,
    getErrorState,
    getIsLoadedState,
    getTotalItemsState,
    useAppSelector,
} from '../../../store';
import { NoBooks } from '../../atoms/noBooks';
import { BookList } from '../../organisms/booklist';
import { Wrapper } from './styled';

export const MainPage = () => {
    const books = useAppSelector(getBooksState);
    const isLoaded = useAppSelector(getIsLoadedState);
    const totalItems = useAppSelector(getTotalItemsState);
    const error = useAppSelector(getErrorState);

    return (
        <Wrapper>
            {error ? (
                <NoBooks />
            ) : (
                <BookList
                    books={books}
                    isLoaded={isLoaded}
                    totalItems={totalItems}
                />
            )}
        </Wrapper>
    );
};
