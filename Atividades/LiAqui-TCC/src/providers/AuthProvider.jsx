
import { useState } from 'react';
import AuthContext from '../contexts/AuthContext';

export function AuthProvider({ children }) {

  const [autenticado, setAutenticado] = useState(
    () => localStorage.getItem('autenticado') === 'true'
  );

  function login() {
    localStorage.setItem('autenticado', 'true');
    setAutenticado(true);
  }


  function logout() {
    localStorage.removeItem('autenticado');
    setAutenticado(false);
  }

  return (
    <AuthContext.Provider
      value={{ 
        autenticado, 
        login, 
        logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
