import React from 'react';
import { InputWrapper, InputContainer, SubmitButton } from './styled';
import { TInputProps } from './types';

export const Input = React.forwardRef<HTMLInputElement, TInputProps>(
    ({ placeholder, ...props }, ref) => {
        return (
            <InputContainer>
                <InputWrapper placeholder={placeholder} {...props} ref={ref} />
                <SubmitButton />
            </InputContainer>
        );
    }
);
