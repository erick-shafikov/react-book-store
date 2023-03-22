import styled from 'styled-components';

export const LoaderLine = styled.span`
    & {
        width: 100%;
        height: 4.8px;
        display: inline-block;
        position: relative;
        background: #303030;
        overflow: hidden;
    }
    &::after {
        content: '';
        width: 192px;
        height: 4.8px;
        background: #fff;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        animation: animloader 2s linear infinite;
    }

    @keyframes animloader {
        0% {
            left: 0;
            transform: translateX(-100%);
        }
        100% {
            left: 100%;
            transform: translateX(0%);
        }
    }
`;
