// import { LoadMoreButton } from '../../atoms/loadMoreButton';
import { loadMore, useAppDispatch } from '../../../store';
import { BookListItem } from '../../molecules/bookListItem';
import { GridList } from './styled';
import { BookListProps } from './types';

export const BookList = ({ books, isLoaded, totalItems }: BookListProps) => {
    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        dispatch(loadMore());
    };

    return (
        <>
            {!isLoaded && <>Loading...</>}
            {isLoaded && <>found{totalItems}results</>}
            <GridList>
                {Object.values(books).map((item) => (
                    <BookListItem
                        boookTitle={item?.volumeInfo.title}
                        key={item?.id}
                        category={item?.volumeInfo.authors?.[0]}
                        author={item?.volumeInfo.categories?.[0]}
                        imageSrc={item?.volumeInfo.imageLinks?.thumbnail}
                        id={item?.id}
                    />
                ))}
            </GridList>
            {!isLoaded && <>Loading...</>}
            {isLoaded && !(Object.values(books).length >= totalItems) && (
                <button onClick={onClickHandler}>Load More</button>
            )}
        </>
    );
};
