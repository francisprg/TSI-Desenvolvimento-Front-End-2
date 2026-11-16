import { createContext, useContext } from "react";

const AuthContext = createContext({
    user: null,
    loading: true,
    setUser: () => { },
    auth: () => {},
    logout: () => {},
}
);

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;