import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../components/layots/Header';
import { BookPage } from '../components/pages/BookPage';
import { MainPage } from '../components/pages/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            { path: '/', element: <MainPage /> },
            { path: '/book', element: <BookPage /> },
        ],
    },
]);

export default router;
