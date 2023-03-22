import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/layots/MainLayout';
import { BookPage } from '../components/pages/BookPage';
import { ErrorPage } from '../components/pages/Error/Error';
import { MainPage } from '../components/pages/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <MainPage /> },
            {
                path: '/book/:id',
                element: <BookPage />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

export default router;
