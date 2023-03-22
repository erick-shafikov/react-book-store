import styled from 'styled-components';

export const GridList = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    align-content: space-between;
    justify-items: center;
`;

export const FoundResults = styled.div`
    text-align: center;
    margin: 10px 0;
    color: #787878;
`;
