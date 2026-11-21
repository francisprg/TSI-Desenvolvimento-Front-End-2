import { useEffect, useRef, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import axiosClient, { csrfClient } from './../utils/axios-client';

const VERIFY_USER_INTERVAL =  import.meta.env.VITE_VERIFY_USER_INTERVAL

const getCurrentUser = async () => {
  try {
    const response = await axiosClient.get('/user');
    return response.data;
  } catch (error) {
    if (error.response?.status !== 401) {
      console.error(
        'Erro ao recuperar usuário:',
        error.response?.data?.message || error.message
      );
    }

    return null;
  }
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isVerifying = useRef(false);

  const auth = async (payload) => {
    await csrfClient.get('/sanctum/csrf-cookie');
    await axiosClient.post('/login', payload);

    const authenticatedUser = await getCurrentUser();

    if (!authenticatedUser) {
      throw new Error('Não foi possível recuperar o usuário autenticado.');
    }

    setUser(authenticatedUser);
  };

  const logout = async () => {
    await axiosClient.post('/logout');
    setUser(null);
  };

  useEffect(() => {
    const verify = async () => {
      if (isVerifying.current) return;
      isVerifying.current = true;

      try {
        setUser(await getCurrentUser());
      } finally {
        setLoading(false);
        isVerifying.current = false;
      }
    };

    verify();

    const interval = setInterval(verify, VERIFY_USER_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        auth,
        logout,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
