import React from 'react';
import { SearchBar } from '../../atoms/searchBar';
import { Select } from '../../atoms/select';
import { SelectBox, Styled } from './styled';
import { TSearchPanelProps } from './types';

export const SearchPanel = () => {
    return (
        <Styled>
            <SearchBar />
            <SelectBox>
                <Select category={'Categories'} />
                <Select category={'Sorting by'} />
            </SelectBox>
        </Styled>
    );
};
