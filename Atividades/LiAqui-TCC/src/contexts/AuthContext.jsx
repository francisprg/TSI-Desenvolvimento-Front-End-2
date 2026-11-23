import { createContext, useContext } from "react";

const AuthContext = createContext({
    user: null,
    isLogged: false,
    loading: true,
    setUser: () => { },
    auth: () => {},
    logout: () => {},
    logOut: () => {},
}
);

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;