import { useContext, Suspense } from "react";
import LivrosContext from "../../contexts/LivrosContext";
import { useParams } from "react-router";

import ShowCardLivro from './../ShowCardLivro/ShowCardLivro';



export default function ShowLivro () {


    const {loadLivros} = useContext(LivrosContext);
    


    const { id } = useParams();

    console.log(id)
    console.log(loadLivros)


    return (
        <>
            <Suspense fallback={<p  className=" flex align-middle justify-center">Carregando Livro...</p>}>
                <ShowCardLivro loadLivros={loadLivros(id)} />
            </Suspense>
        </>
    )















}