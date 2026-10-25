import { createContext } from "react";

const MockDadosContext = createContext({
  Livros: [],
  setLivros: () => {},
  Leitores: [],
  setLeitores: () => {},
  Resenhas: [],
  setResenhas: () => {},
});

export default MockDadosContext;