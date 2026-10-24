import { useRef, useState } from "react";
import TodolistContext from "../context/TodoListContext";



export const TodoListProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState(() => {
    const dadosSalvos = localStorage.getItem("tarefas");

    if (dadosSalvos) {
      return JSON.parse(dadosSalvos);
    }

    return [];
  });

  const [tarefaEmEdicao, setTarefaEmEdicao] = useState(null);
  const tituloRef = useRef(" ");
  const descricaoRef = useRef(" ");
  const descricaoEtapaRef = useRef(" ");

  function atualizarTarefas(tarefasAtualizadas) {
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
    setTarefas(tarefasAtualizadas);
  }

  function criarTarefa(event) {
    event.preventDefault();

    const titulo = tituloRef.current.value.trim();

    if (!titulo) return;

    const tarefa = {
      id: tarefaEmEdicao?.id ?? Date.now(),
      titulo: titulo,
      descricao: descricaoRef.current.value,
      etapas: tarefaEmEdicao?.etapas ?? [],
    };

    salvarTarefa(tarefa);
    tituloRef.current.value = "";
    descricaoRef.current.value = "";
  }

  function editarTarefa(tarefa) {
    setTarefaEmEdicao(tarefa);
  }

  function salvarTarefa(tarefa) {
    let tarefasAtualizadas;

    if (tarefaEmEdicao) {
      tarefasAtualizadas = tarefas.map((item) => {
        return item.id === tarefa.id ? tarefa : item;
      });
    } else {
      tarefasAtualizadas = [...tarefas, tarefa];
    }

    atualizarTarefas(tarefasAtualizadas);
    setTarefaEmEdicao(null);
  }

  function salvarEtapaTarefa(idTarefa, novaEtapa) {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === idTarefa) {
        return {
          ...tarefa,
          etapas: [...(tarefa.etapas ?? []), novaEtapa],
        };
      }

      return tarefa;
    });

    atualizarTarefas(tarefasAtualizadas);
  }

  function excluirEtapa(idTarefa, idEtapa) {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === idTarefa) {
        return {
          ...tarefa,
          etapas: (tarefa.etapas ?? []).filter((etapa) => {
            return etapa.id !== idEtapa;
          }),
        };
      }

      return tarefa;
    });

    atualizarTarefas(tarefasAtualizadas);
  }

  function excluirTarefa(id) {
    const tarefasAtualizadas = tarefas.filter((tarefa) => {
      return tarefa.id !== id;
    });

    atualizarTarefas(tarefasAtualizadas);
  }

  function criarEtapa(event, idTarefa) {
    event.preventDefault();

    const descricao = descricaoEtapaRef.current.value.trim();

    if (!descricao) return;

    const novaEtapa = {
      id: Date.now(),
      descricao: descricao,
    };

    salvarEtapaTarefa(idTarefa, novaEtapa);
    descricaoEtapaRef.current.value = "";
  }

  return (
    <>
      <TodolistContext.Provider
        value={{
          tarefas,
          tarefaEmEdicao,
          tituloRef,
          descricaoRef,
          editarTarefa,
          excluirTarefa,
          salvarTarefa,
          criarTarefa,
          criarEtapa,
          excluirEtapa,
          salvarEtapaTarefa,
          atualizarTarefas,
          descricaoEtapaRef,
        }}
      >
        {children}
      </TodolistContext.Provider>
    </>
  );
};