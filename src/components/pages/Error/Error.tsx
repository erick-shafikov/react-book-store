import { Button } from '../../atoms/button';
import { Wrapper } from './styled';
import { TErrorPageProps } from './types';

export const ErrorPage = ({ errorMessage }: TErrorPageProps) => {
    return (
        <Wrapper onClick={() => location.reload()}>
            {errorMessage || 'Error, something going wrong'}
            <Button path={'/'}>Back to Home</Button>
        </Wrapper>
    );
};
