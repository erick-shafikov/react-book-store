import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/layots/MainLayout';
import { BookPage } from '../components/pages/BookPage';
import { MainPage } from '../components/pages/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <MainPage /> },
            { path: '/book/:id', element: <BookPage /> },
        ],
    },
]);

export default router;
