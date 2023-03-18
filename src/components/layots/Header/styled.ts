import styled from 'styled-components';
import img from '/background.jpg';

export const Styled = styled.div`
    position: relative;
    min-height: 250px;
    background-size: cover;
    object-fit: cover;
    background-image: url(${img});
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
