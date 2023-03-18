import styled from 'styled-components';

export const GridList = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    align-content: space-between;
    justify-items: center;
`;
