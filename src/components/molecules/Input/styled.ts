import styled from 'styled-components';
import loop from '../../../../public/loop.svg';

export const InputWrapper = styled.input`
    max-width: 500px;
    width: 100%
    display: flex;
    margin: 5px 0;
    height: 30px;
    font-size: 20px;
    text-align: center;

    &::placeholder {
        color: 	#D3D3D3;
    }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
    max-width: 30px;
    height: 32px;
    margin: 0;
    border: 1px solid $fff;
    background: center no-repeat url(${loop});
    background-color: #fff;
    border-style: none;
    background-size: 80%;
`;

export const InputContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
