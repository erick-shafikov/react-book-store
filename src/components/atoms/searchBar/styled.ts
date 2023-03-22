import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const InputBox = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    max-width: 500px;
    width: 100%
    display: flex;
    margin: 5px 0;
    height: 30px;
    font-size: 20px;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
    max-width: 20px;
    height: 30px;
    margin: 0;
`;

export const StyledSelect = styled.select`
    max-width: 400px;
`;

export const SelectContainer = styled.div`
    max-width: 500px;
    margin: 5px;
    display: flex;
`;

export const TextBox = styled.div`
    text-align: right;
    max-width: 100px;
    display: inline;
    margin: 5px;
    color: #fff;
`;

export const SelectBox = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    margin: 20px 0;
    align-content: space-between;
    flex-wrap: wrap;
`;
