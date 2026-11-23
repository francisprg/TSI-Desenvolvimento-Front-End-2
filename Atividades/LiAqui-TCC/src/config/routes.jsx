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
import { DashboardContent } from './../components/DashBoardContent/DashBoardContent';
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import LivrosProvider from "../providers/LivrosProvider";
import UsersProvider from "../providers/UsersProvider";
import AutoresProvider from "../providers/AutoresProvider";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>  <Route path="*" element={<NotFoundPage/>}></Route>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Cadastro" element={<Cadastro />} />


            <Route
                path="/dashboard"
                element={
                    <Private>
                        <LivrosProvider>
                            <UsersProvider>
                                <AutoresProvider>
                                    <DashboardContent />
                                </AutoresProvider>
                            </UsersProvider>
                        </LivrosProvider>
                    </Private>
                }
            />


            
            <Route element={<Private><LivrosProvider><LayoutPrincipal/></LivrosProvider></Private>}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/perfil/:id" element={<Perfil />} />
                    <Route path="/livros/:id" element={<ShowLivro />} />
                <Route path="/sobre" element={<Sobre />} />
            </Route>
        </>
    )
);

export default router;