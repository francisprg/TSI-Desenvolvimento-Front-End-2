import { useCallback, useEffect, useRef, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import axiosClient, { csrfClient } from "../utils/axios-client";

const VERIFY_USER_INTERVAL =
  Number(import.meta.env.VITE_VEIRIFY_USER_INTERVAL) || 60000;

const verifyUser = async () => {
  try {
    const { data } = await axiosClient.get("/user");
    if (!data) throw new Error("Erro ao recuperar usuário!");
    return data?.data ?? data;
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("CURRENT_USER");
    } else {
      console.error(
        "Erro ao verificar usuário:",
        error.response?.data?.message || error.message
      );
    }
    return null;
  }
};

const verifyLocalStorage = () => {
  try {
    const localStorageUser = JSON.parse(
      localStorage.getItem("CURRENT_USER")
    );
    return localStorageUser?.name ? localStorageUser : null;
  } catch {
    localStorage.removeItem("CURRENT_USER");
    return null;
  }
};

export default function AuthProvider({ children }) {
  const [user, setUserState] = useState(verifyLocalStorage);

  const [isLogged, setIsLogged] = useState(() =>
    Boolean(verifyLocalStorage())
  );
  
  const [loading, setLoading] = useState(true);
  const isVerifying = useRef(false);

  const setUser = useCallback((nextUser) => {
    if (nextUser) {
      const { name, email } = nextUser;
      localStorage.setItem("CURRENT_USER", JSON.stringify({ name, email }));
      setUserState(nextUser);
      setIsLogged(true);
    } else {
      localStorage.removeItem("CURRENT_USER");
      setUserState(null);
      setIsLogged(false);
    }
  }, []);

  const verifyLogin = useCallback(async () => {
    if (isVerifying.current) return;

    isVerifying.current = true;
    try {
      const authenticatedUser = await verifyUser();
      setUser(authenticatedUser);
      return Boolean(authenticatedUser);
    } finally {
      setLoading(false);
      isVerifying.current = false;
    }
  }, [setUser]);

  const auth = async (credentials) => {
    await csrfClient.get("/sanctum/csrf-cookie");

    const response = await axiosClient.post("/login", credentials);
    if (response?.status !== 200) {
      throw new Error(response.data);
    }

    const authenticatedUser = response.data?.data ?? response.data;
    if (!authenticatedUser) {
      throw new Error("Erro ao recuperar usuário!");
    }

    setUser(authenticatedUser);
  };

  const logOut = async () => {
    try {
      await axiosClient.post("/logout");
    } finally {
      setUser(null);
    }
  };

  useEffect(() => {
    verifyLogin();
  }, [verifyLogin]);

  useEffect(() => {
    if (!isLogged) return undefined;

    const interval = setInterval(
      verifyLogin,
      Math.max(VERIFY_USER_INTERVAL, 30000)
    );

    return () => clearInterval(interval);
  }, [isLogged, verifyLogin]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        loading,
        auth,
        logOut,
        logout: logOut,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
