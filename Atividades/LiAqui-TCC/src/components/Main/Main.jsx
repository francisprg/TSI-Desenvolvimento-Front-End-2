import Hero from "../Hero/Hero";
import BookShowcase from "../BookShowcase/BookShowcase";
import Filters from "../Filters/Filters";
import { useContext, Suspense } from "react";
import LivrosContext from "../../contexts/LivrosContext";

function Main() {

    const { loadLivros } = useContext(LivrosContext);

    const loadLivrosPromisse = loadLivros();

      console.log("loadLivros:", loadLivros);

         console.log("Promise:", loadLivrosPromisse);
    return (
        <main>
            <Hero />
            <Filters />

            <Suspense fallback={<p className="flex justify-center">Carregando...</p>}>
                <BookShowcase
                    loadLivrosPromisse={loadLivrosPromisse}
                />
            </Suspense>
        </main>
    );
}

export default Main;