import styled from 'styled-components';

export const BookListItemWrapper = styled.div`
    max-width: 300px;
    height: 400px;
    background-color: #f0f0f0;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 3px;
    overflow: hidden;

    &:hover {
        background-color: #e8e8e8;
    }
`;

export const StyledCategory = styled.div`
    color: #fff;
    font-size: small;
`;

export const BookTitle = styled.h3`
    width: 90%;
    text-align: center;
    margin: 5px;
    word-wrap: wrap;
`;

export const AuthorName = styled.div`
    color: #707070;
`;
