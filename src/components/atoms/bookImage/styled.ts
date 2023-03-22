import styled from 'styled-components';

export const BookImageContainer = styled.div<{ width: string; height: string }>`
    max-width: ${({ width }) => width};
    margin: 10px auto;
    height: ${({ height }) => height};
`;

export const BookImg = styled.img`
    max-width: ${({ width }) => width};
    height: ${({ height }) => height};
    box-shadow: 26px 23px 22px -13px rgba(34, 60, 80, 0.29);
`;
