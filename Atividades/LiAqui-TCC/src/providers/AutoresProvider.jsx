import { useState } from "react";
import AutoresContext from "../contexts/AutoresContext";
import { fetchApi } from "../services/fetchApiData";

const AutoresProvider = ({ children }) => {
    const [cacheAutores, setCacheAutores] = useState([]);

    const loadAutores = async () => {
        if (cacheAutores.length > 0) {
            return cacheAutores;
        }

        const autores = await fetchApi("autores");
        setCacheAutores(autores);
        return autores;
    };

    const freshAutores = async (id) => {
        const autores = await fetchApi("autores", id);
        setCacheAutores(autores);
        return autores;
    };

    const editAutor = async () => {};
    const deleteAutor = () => {};
    const createAutor = () => {};

    return (
        <AutoresContext.Provider
            value={{
                loadAutores,
                freshAutores,
                editAutor,
                deleteAutor,
                createAutor,
            }}
        >
            {children}
        </AutoresContext.Provider>
    );
};

export default AutoresProvider;
