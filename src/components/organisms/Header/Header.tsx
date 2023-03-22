import { HeaderTitle } from '../../atoms/headerTitle';
import { SearchBar } from '../searchBar';
import { HeaderWrapper } from './styled';

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTitle headerText="Search for books" />
            <SearchBar />
        </HeaderWrapper>
    );
};
