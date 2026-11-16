import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";



function ProtectedRoute() {

    const { user, loading } = useAuthContext()

        if (loading) {
            return null;
        }

        if (!user) {
            return <Navigate to="/login" replace />;
        }

        return <Outlet/>
}


export default ProtectedRoute;