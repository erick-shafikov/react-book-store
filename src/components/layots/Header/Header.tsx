import { Outlet } from 'react-router-dom';
import { HeaderTitle } from '../../atoms/headerTitle';
import { SearchPanel } from '../../molecules/searchPanel';
import { Styled } from './styled';

export const Header = () => {
    return (
        <Styled>
            <HeaderTitle headerText="Search for books" id="fuck" />
            <SearchPanel />
            <Outlet />
        </Styled>
    );
};
