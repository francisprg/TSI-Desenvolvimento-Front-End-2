
import { useState } from 'react';
import './App.css'

import FormTarefa from './components/FormTarefa/FormTarefa';
import ListaTarefas from './components/ListaTarefas/ListaTarefas';




function App() {


  const [tarefas, setTarefas] = useState(() => {

    const dadosSalvos = localStorage.getItem('tarefas');

    if (dadosSalvos) {
      return JSON.parse(dadosSalvos);
    }

    return [];
  });

  const [tarefaEmEdicao, setTarefaEmEdicao] = useState(null);

  function editarTarefa(tarefa) {
    setTarefaEmEdicao(tarefa);
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


    atualizarTarefas(tarefasAtualizadas)

  }


  function salvarEtapaTarefa(idTarefa, novaEtapa) {
  
  
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === idTarefa) {
        return { ...tarefa, etapas: [...(tarefa.etapas ?? []), novaEtapa],
        };
      }

      return tarefa;
    });

    atualizarTarefas(tarefasAtualizadas);
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

  function atualizarTarefas(tarefasAtualizadas) {
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

    setTarefas(tarefasAtualizadas);

  }






  return (
    <>
      <FormTarefa
        key={tarefaEmEdicao?.id ?? "nova"}
        salvarTarefa={salvarTarefa}
        tarefaEmEdicao={tarefaEmEdicao}
      />
      <ListaTarefas
        tarefas={tarefas}
        excluirTarefa={excluirTarefa}
        editarTarefa={editarTarefa}
        salvarEtapaTarefa={salvarEtapaTarefa}
        excluirEtapa={excluirEtapa}


      />

    </>
  );






}



export default App
