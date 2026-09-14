import './style.css'

function ToDoListForm() {
  return (
    <div className="todo-form">
      <h1>React ToDoList</h1>
      <p>Crie e organize suas tarefas!!!</p>

      <label htmlFor="titulo">Título</label>
      <input type="text" id="titulo" placeholder="Título" />

      <label htmlFor="texto">Texto</label>
      <textarea id="texto" placeholder="Texto"></textarea>

      <button>+ Nova Tarefa</button>
    </div>
  )
}

export default ToDoListForm