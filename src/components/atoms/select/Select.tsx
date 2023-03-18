import React from 'react';
import { SelectContainer, StyledSelect, TextBox } from './styled';
import { TSelectProps } from './types';

export const Select = ({ category }: TSelectProps) => {
    return (
        <SelectContainer>
            <TextBox>{category}</TextBox>
            <StyledSelect />
        </SelectContainer>
    );
};
