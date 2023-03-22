import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    text-align: center;
    background: linear-gradient(to right, #404040, #e0e0e0);
    color: #fff;
    font-size: x-large;
    border-style: none;
    transition-timing-function: ease-out;

    &:hover {
        background-color: #707070;
        transform: translateY(-5px);
    }

    &:active {
        background-color: #404040;
    }
`;
