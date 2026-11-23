import { createContext } from "react";

const AutoresContext = createContext({
    ListAutores: [],
    freshAutores: () => {},
    loadAutores: () => {},
    editAutor: () => {},
    deleteAutor: () => {},
    createAutor: () => {},
});

export default AutoresContext;
