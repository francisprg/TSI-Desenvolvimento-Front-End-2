
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import {
  RouterProvider
} from 'react-router';
import router from './config/routes';
import AuthProvider  from './providers/AuthProvider';
import LivrosProvider from './providers/LivrosProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <LivrosProvider>
      <RouterProvider router={router} />
      </LivrosProvider>
    </AuthProvider>
  </StrictMode>
);
