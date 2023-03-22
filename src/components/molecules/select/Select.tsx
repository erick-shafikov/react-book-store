import React from 'react';
import { StyledSelect, TextBox } from './styled';
import { TSelectProps } from './types';

export const Select = React.forwardRef<HTMLSelectElement, TSelectProps>(
    ({ header, options, ...props }, ref) => {
        return (
            <>
                <TextBox> {header}</TextBox>
                <StyledSelect {...props} ref={ref}>
                    {options.map((item: string) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </StyledSelect>
            </>
        );
    }
);
