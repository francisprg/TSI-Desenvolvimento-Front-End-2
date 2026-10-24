import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Perfil from './pages/Perfil/Perfil';
import Sobre from './pages/Sobre/Sobre';
import LayoutPrincipal from './layouts/MainLayout';


const router = createBrowserRouter([

  {
    path: '/',
    element: <LayoutPrincipal/>,
    children: [
      {index: true, element: <App/>},
      {path: 'perfil/:id', element: <Perfil/>},
      {path: 'sobre', element: <Sobre/>},
    ]
  },
  {
    path: '/login',
    element: <> <Login/> </>

  },
  {
    path: '/cadastro',
    element: <> <Cadastro /> </>

  },
])









createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
