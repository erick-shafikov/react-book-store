import { Button } from '../../atoms/button';
import { Author, BookDetails, Title } from './styled';
import { TBookDescription } from './types';

export const BookDescription = ({
    title,
    authors,
    description,
}: TBookDescription) => {
    return (
        <BookDetails>
            <Title>{title}</Title>
            {authors &&
                authors.map((author) => <Author key={author}>{author}</Author>)}
            <div
                dangerouslySetInnerHTML={{ __html: description }}
                style={{ textAlign: 'center' }}
            ></div>
            <Button path="/">Home ⬅</Button>
        </BookDetails>
    );
};
