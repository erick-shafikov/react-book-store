import { Outlet } from 'react-router-dom';
import { Header } from '../../organisms/Header';
import { StyledWrapper } from './styled';

export const MainLayout = () => {
    return (
        <StyledWrapper>
            <Header />
            <Outlet />
        </StyledWrapper>
    );
};
