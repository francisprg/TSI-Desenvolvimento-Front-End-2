import { Suspense, useContext } from "react";
import Dashboard from "../DashBoard/DashBoard";
import UsersContext from './../../contexts/UsersContext';
import LivrosContext from "../../contexts/LivrosContext";
import AutoresContext from './../../contexts/AutoresContext';

export const DashboardContent = () => {

    const { loadUsers } = useContext(UsersContext);
    const { loadLivros } = useContext(LivrosContext);
    const { loadAutores } = useContext(AutoresContext);

    const usersPromisse = loadUsers();
    const livrosPromisse = loadLivros();
    const autoresPromisse = loadAutores();


    return (

        <Suspense fallback={<p>Carregando...</p>}>
            <Dashboard
                usersPromisse={usersPromisse}
                livrosPromisse={livrosPromisse}
                autoresPromisse={autoresPromisse}
            />
        </Suspense>
    );
};