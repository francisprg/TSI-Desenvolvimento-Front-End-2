
import { createContext } from "react";

const TodolistContext = createContext({
  tarefas: [],
  tarefaEmEdicao: null,

  tituloRef: {},
  descricaoRef: {},

  editarTarefa: () => {},

  criarTarefa: () => {},
  salvarTarefa: () => {},
  excluirTarefa: () => {},

  criarEtapa: () => {},
  salvarEtapaTarefa: () => {},
  excluirEtapa: () => {},

  atualizarTarefas: () => {},
});

export default TodolistContext;
