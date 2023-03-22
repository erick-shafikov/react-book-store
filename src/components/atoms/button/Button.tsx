import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper } from './styled';
import { TButtonProps } from './types';

export const Button = ({ path, children }: TButtonProps) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(path);
    };

    return <ButtonWrapper onClick={onClickHandler}>{children}</ButtonWrapper>;
};
