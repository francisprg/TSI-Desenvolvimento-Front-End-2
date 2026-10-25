
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router';

import App from './App';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Perfil from './pages/Perfil/Perfil';
import Sobre from './pages/Sobre/Sobre';
import LayoutPrincipal from './layouts/MainLayout';
import { MockDadosProvider } from './providers/MockDadosProvider';
import Home from './pages/Home/Home';
import { AuthProvider } from './providers/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPrincipal />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'home',
            element: (
              <MockDadosProvider>
                <Home />
              </MockDadosProvider>
            ),
          },
          {
            path: 'perfil/:id',
            element: (
              <MockDadosProvider>
                <Perfil />
              </MockDadosProvider>
            ),
          },
        ],
      },
      {
        path: 'sobre',
        element: <Sobre />,
      },
    ],
  },
  {
    index: true,
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
