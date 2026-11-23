import { useState } from "react";
import UsersContext from "../contexts/UsersContext";
import { fetchApi } from "../services/fetchApiData";


const UsersProvider = ({ children }) => {
    const [cacheUsers, setCacheUsers] = useState([]);

    const loadUsers = async () => {
        if (cacheUsers.length > 0) {
            return cacheUsers;
        }

        const users = await fetchApi("users");
        setCacheUsers(users);
        return users;
    };

    const freshUsers = async (id) => {
        const users = await fetchApi("users", id);
        setCacheUsers(users);
        return users;
    };

    const editUser = async () => {};
    const deleteUser = () => {};
    const createUser = () => {};

    return (
        <UsersContext.Provider
            value={{
                loadUsers,
                freshUsers,
                editUser,
                deleteUser,
                createUser,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;


