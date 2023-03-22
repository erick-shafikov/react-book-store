import styled from 'styled-components';

export const BookImageContainer = styled.div<{ width: string; height: string }>`
    max-width: ${({ width }) => width};
    margin: 10px auto;
    height: ${({ height }) => height};
    border-radius: 3px;
`;

export const BookImg = styled.img`
    max-width: ${({ width }) => width};
    height: ${({ height }) => height};
    object-fit: contain;
    border-radius: 3px;
`;
