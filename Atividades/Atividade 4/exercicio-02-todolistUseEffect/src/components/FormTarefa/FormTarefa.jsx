import { useState } from "react"

import './style.css'

function FormTarefa({ salvarTarefa, tarefaEmEdicao }) {


    const [tituloInput, setTituloInput] = useState(tarefaEmEdicao?.titulo ?? "")
    const [descricaoInput, setDescricaoInput] = useState(tarefaEmEdicao?.descricao ?? "")


    const handleTitulo = (e) => {
        setTituloInput(e.target.value)
    };

    const handleDescricao = (e) => {
        setDescricaoInput(e.target.value)
    }


    function criarTarefa(event) {
        event.preventDefault();

        const titulo = tituloInput.trim();

        if (!titulo) return;

        const tarefa = {
            id: tarefaEmEdicao?.id ?? Date.now(),
            titulo: titulo,
            descricao: descricaoInput,
            etapas: tarefaEmEdicao?.etapas ?? [],
        };

        salvarTarefa(tarefa);
        setTituloInput("");
        setDescricaoInput("");
    }


    return (
        <>

            <form className="todo-form" onSubmit={criarTarefa}>
                <h1>React ToDoList</h1>
                <p>Crie e organize suas tarefas!!!</p>

                <label htmlFor="titulo">Título</label>

                <input
                    type="text" id="titulo"
                    placeholder="Título"
                    value={tituloInput}
                    onChange={handleTitulo} />

                <label htmlFor="texto">Texto</label>
                <textarea id="texto" placeholder="Texto"
                    onChange={handleDescricao}
                    value={descricaoInput}
                ></textarea>

                <button type="submit">
                    {tarefaEmEdicao ? "Salvar alterações" : "+ Nova Tarefa"}
                </button>
            </form>

        </>
    )

}



export default FormTarefa;