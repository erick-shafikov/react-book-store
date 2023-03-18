import React from 'react';
import { Styled } from './styled';
import { THeaderProps } from './types';

export const HeaderTitle = ({ headerText = 'Title' }: THeaderProps) => {
    return <Styled>{headerText}</Styled>;
};
