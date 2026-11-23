import { createContext } from "react";

const UsersContext = createContext({
    ListUsers: [],
    freshUsers: () => {},
    loadUsers: () => {},
    editUser: () => {},
    deleteUser: () => {},
    createUser: () => {},
});

export default UsersContext;