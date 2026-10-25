import { useContext } from "react";
import AuthContext from './../../contexts/AuthContext';
import { Navigate, Outlet } from "react-router";


function ProtectedRoute() {

    const { autenticado } = useContext(AuthContext);

        if (!autenticado) {
            return <Navigate to="/login" replace />;
        }

        return <Outlet/>
}


export default ProtectedRoute;