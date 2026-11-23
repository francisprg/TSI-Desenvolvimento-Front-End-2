import { useState } from "react";
import LivrosContext from "../contexts/LivrosContext";
import { fetchApi } from "../services/fetchApiData";

const LivrosProvider = ({ children }) => {

    const [cacheLivros, setCacheLivros] = useState([]);

    const loadLivros = async () => {

        if (cacheLivros.length > 0) {
            return cacheLivros;
        }
        
        const livros = await fetchApi('livros');

        setCacheLivros(livros);

        return livros;
    };


    const freshLivros = async (id) => {

        const livros = await fetchApi('livros', id);

        setCacheLivros(livros);

        return livros;
    };


    const editLivro = async () => {

    };


    const deleteLivro = () => {

    };


    const createLivro = () => {

    };


    return (
        <LivrosContext.Provider
            value={{
                loadLivros,
                freshLivros,
                editLivro,
                deleteLivro,
                createLivro
            }}
        >
            {children}
        </LivrosContext.Provider>
    );
};

export default LivrosProvider;