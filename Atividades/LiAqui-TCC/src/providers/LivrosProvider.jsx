import { useState } from "react";
import LivrosContext from "../contexts/LivrosContext";
import { fetchLivrossApi } from "../services/fetchApiData";


const LivrosProvider = ({ children }) => {

    
    const [cacheLivros, setCacheLivros ] = useState([]);

    const loadLivros = async () => {

      if (cacheLivros?.length>0) return cacheLivros;
      const livros = await fetchLivrossApi();
      setCacheLivros(cacheLivros);
      return livros;

    };


    const freshLivros = async(id) => {
        const livros = fetchLivrossApi();
        setCacheLivros(livros)
        return livros;
    }

    
    
    const editLivro = async() => {

        
    }



    function deleteLivro() {

    }

    function createLivro() {

    }

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