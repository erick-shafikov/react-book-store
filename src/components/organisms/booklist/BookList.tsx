import { loadMore, useAppDispatch } from '../../../store';
import { LoaderLine } from '../../atoms/loader/styled';
import { LoadMoreButton } from '../../atoms/loadMoreButton';
import { BookListItem } from '../../molecules/bookListItem';
import { FoundResults, GridList } from './styled';
import { BookListProps } from './types';

export const BookList = ({ books, isLoaded, totalItems }: BookListProps) => {
    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        dispatch(loadMore());
    };

    return (
        <>
            {isLoaded ? (
                <FoundResults>found {totalItems} results</FoundResults>
            ) : (
                <LoaderLine />
            )}
            <GridList>
                {Object.values(books).map((item) => (
                    <BookListItem
                        boookTitle={item?.volumeInfo.title}
                        key={item?.id}
                        category={item?.volumeInfo.categories?.[0]}
                        authors={item?.volumeInfo?.authors}
                        imageSrc={item?.volumeInfo.imageLinks?.thumbnail}
                        id={item?.id}
                    />
                ))}
            </GridList>
            {isLoaded && !(Object.values(books).length >= totalItems) && (
                <LoadMoreButton onClick={onClickHandler} />
            )}
        </>
    );
};
