import { createContext } from "react";


const LivrosContext = createContext({
    ListLivros: [],
    freshLivros: () => { },
    loadLivros: () => { },
    editLivro: () => { },
    deleteLivro: () => { },
    createLivro: () => { },
});

export default LivrosContext;

