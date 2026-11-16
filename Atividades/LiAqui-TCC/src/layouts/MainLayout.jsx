
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Navigate, Outlet } from 'react-router';
import { useAuthContext } from "../contexts/AuthContext";

export const Private = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <main>
        <section>
          <p>Verificando autenticação...</p>
        </section>
      </main>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

