import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router";
import Sobre from "./../pages/Sobre/Sobre";
import LayoutPrincipal, { Private } from "./../layouts/MainLayout";
import Home from "./../pages/Home/Home";
import ShowLivro from "./../components/ShowLivro/ShowLivro";
import App from "./../App";
import Login from "./../pages/Auth/Login/Login";
import Cadastro from "./../pages/Auth/Cadastro/Cadastro";
import Perfil from "./../pages/Perfil/Perfil";
import Dashboard from './../components/DashBoard/DashBoard';
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>  <Route path="*" element={<NotFoundPage/>}></Route>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route element={<Private><LayoutPrincipal/></Private>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/perfil/:id" element={<Perfil />} />
                    <Route path="/livros/:id" element={<ShowLivro />} />
                <Route path="/sobre" element={<Sobre />} />
            </Route>
        </>
    )
);

export default router;