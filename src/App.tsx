import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { useInitApp } from './hooks/useInitApp';

function App() {
    useInitApp();
    return <RouterProvider router={router} />;
}

export default App;
