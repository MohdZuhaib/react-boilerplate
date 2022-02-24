import { Navigate, useRoutes } from 'react-router-dom';

import LoginLayout from '../common/layout/LoginLayout';
import Login from '../pages/auth/Login';

import NotFound from '../containers/Page404';

const Router = () =>
    useRoutes([
        {
            path: '/',
            element: <LoginLayout />,
            children: [
                { path: 'login', element: <Login /> },
                // { path: 'register', element: <Register /> },
                { path: '404', element: <NotFound /> },
                // { path: '/', element: <Navigate to="/dashboard" /> },
                { path: '*', element: <Navigate to="/404" /> }
            ]
        },
       
        { path: '*', element: <Navigate to="/404" replace /> }
    ]);

export default Router;
