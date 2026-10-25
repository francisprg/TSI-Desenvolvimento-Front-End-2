import { useState } from "react";
import livrosMock from "../mock/livrosMock.json";
import resenhasMock from "../mock/resenhasMock.json";
import leitoresMock from "../mock/leitoresMock.json";
import MockDadosContext from "../contexts/MockDadosContext";

export const MockDadosProvider = ({ children }) => {
  const [Livros, setLivros] = useState(livrosMock);
  const [Leitores, setLeitores] = useState(leitoresMock);
  const [Resenhas, setResenhas] = useState(resenhasMock);

  return (
    <MockDadosContext.Provider
      value={{
        Livros,
        setLivros,
        Leitores,
        setLeitores,
        Resenhas,
        setResenhas,
      }}
    >
      {children}
    </MockDadosContext.Provider>
  );
};
