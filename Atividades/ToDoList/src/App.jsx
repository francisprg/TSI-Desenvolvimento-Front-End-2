import { useState } from 'react';
import './App.css';
import ListaDeTarefas from './components/ListaDeTarefas/ListaDeTarefas.jsx';
import ListaTarefas from './components/ListaTarefas/ListaTarefas';

function App() {
 
  const [tarefas, setTarefas] = useState(() => {
    const dadosSalvos = localStorage.getItem('tarefas');

    if (dadosSalvos) {
      return JSON.parse(dadosSalvos);
    }

    return [];
  });

  
  function salvarTarefas(tarefasAtualizadas) {
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas)); // Guarda os dados dentro do LocalStorage

    setTarefas(tarefasAtualizadas); // Guarda os dados dentro do tarefas com useState
  }


  function editarTarefa(id, novoTitulo, novaDescricao) {
  
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {...tarefa, titulo: novoTitulo, descricao: novaDescricao };
      }

      return tarefa;
    });

    salvarTarefas(tarefasAtualizadas);
  }

  function adicionarEtapa(idTarefa, texto) {
    const novaEtapa = {
      id: Date.now(),
      texto: texto
    };

    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === idTarefa) {
        const etapasAtuais = tarefa.etapas || [];
        const etapasAtualizadas = [...etapasAtuais, novaEtapa];

        return {...tarefa, etapas: etapasAtualizadas};
      }

      return tarefa;
    });

    salvarTarefas(tarefasAtualizadas);
  }

  function deletarEtapa(idTarefa, idEtapa) {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === idTarefa) {
        const etapasAtuais = tarefa.etapas || [];

        const etapasAtualizadas = etapasAtuais.filter((etapa) => {
          return etapa.id !== idEtapa;
        });

        return {...tarefa, etapas: etapasAtualizadas};}

      return tarefa;
    });

    salvarTarefas(tarefasAtualizadas);
  }

  function adicionarTarefa(novaTarefa) {
    const tarefasAtualizadas = [...tarefas, novaTarefa]; //Todos os elementos que tinham no array TAREFAS agora estao no novo array TarefasAtualizadas

    salvarTarefas(tarefasAtualizadas); 
  }

  function excluirTarefa(id) {
    const tarefasAtualizadas = tarefas.filter((tarefa) => {
      return tarefa.id !== id;
    });

    salvarTarefas(tarefasAtualizadas);
  }

  return (
    <div className="app">
      <ListaDeTarefas aoAdicionar={adicionarTarefa} />

      <ListaTarefas
        tarefas={tarefas}
        aoExcluir={excluirTarefa}
        adicionarEtapa={adicionarEtapa}
        deletarEtapa={deletarEtapa}
        editarTarefa={editarTarefa}
      />
    </div>
  );
}

export default App;