import React from 'react';
import { Button } from './styled';
import { TLoadMoreButton } from './types';

export const LoadMoreButton = ({ onClick }: TLoadMoreButton) => {
    return <Button onClick={onClick}>click to load More 🕮</Button>;
};
