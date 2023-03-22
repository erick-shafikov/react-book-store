import { Button } from '../../atoms/button';
import { LoaderLine } from '../../atoms/loader/styled';
import { Author, BookDetails, Title } from './styled';
import { TBookDescription } from './types';

export const BookDescription = ({
    title,
    authors,
    description,
    loading,
}: TBookDescription) => {
    return (
        <BookDetails>
            <Title>{title}</Title>
            {authors &&
                authors.map((author) => <Author key={author}>{author}</Author>)}
            {loading ? (
                <LoaderLine />
            ) : (
                <div
                    dangerouslySetInnerHTML={{ __html: description }}
                    style={{ textAlign: 'center' }}
                ></div>
            )}
            <Button path="/">Home ⬅</Button>
        </BookDetails>
    );
};
