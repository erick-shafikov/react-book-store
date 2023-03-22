import { HeaderTitle } from '../../atoms/headerTitle';
import { SearchBar } from '../../atoms/searchBar';
import { Styled } from './styled';

export const Header = () => {
    return (
        <Styled>
            <HeaderTitle headerText="Search for books" id="fuck" />
            <SearchBar />
        </Styled>
    );
};
