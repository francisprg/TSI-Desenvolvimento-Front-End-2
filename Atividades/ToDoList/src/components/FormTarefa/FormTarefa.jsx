import { useRef } from 'react';
import './style.css'
function FormTarefa({ adicionarTarefa }) {
  const InputTitulo = useRef(null);
  const InputDescricao = useRef(null);

  function criarTarefa(event) {
    event.preventDefault();

    const titulo = InputTitulo.current.value;
    const descricao = InputDescricao.current.value;

    if (!titulo.trim()) return; // Verifica se esta vazio

    const novaTarefa = {
      id: Date.now(), //Representa os milisegundos
      titulo,
      descricao,
      etapas: [], 
    };

    adicionarTarefa(novaTarefa);

    InputTitulo.current.value = '';
    InputDescricao.current.value = '';
  }

  return (
    <form className="todo-form" onSubmit={criarTarefa}>
      <h1>React ToDoList</h1>
      <p>Crie e organize suas tarefas!!!</p>

      <label htmlFor="titulo">Título</label>
      <input type="text" id="titulo" placeholder="Título" ref={InputTitulo} />

      <label htmlFor="texto">Texto</label>
      <textarea id="texto" placeholder="Texto" ref={InputDescricao}></textarea>

      <button type="submit">+ Nova Tarefa</button>
    </form>
  )
}

export default FormTarefa