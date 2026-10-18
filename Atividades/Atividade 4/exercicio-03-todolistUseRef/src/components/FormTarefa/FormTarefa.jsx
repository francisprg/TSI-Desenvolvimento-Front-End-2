import { useRef } from "react"

import './style.css'

function FormTarefa({ salvarTarefa, tarefaEmEdicao }) {


    const tituloRef = useRef(null);
    const descricaoRef = useRef(null);


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


    return (
        <>

            <form className="todo-form" onSubmit={criarTarefa}>
                <h1>React ToDoList</h1>
                <p>Crie e organize suas tarefas!!!</p>

                <label htmlFor="titulo">Título</label>

                <input
                    type="text" id="titulo"
                    placeholder="Título"
                    ref={tituloRef}
                    defaultValue={tarefaEmEdicao?.titulo ?? ""} />

                <label htmlFor="texto">Texto</label>
                <textarea id="texto" placeholder="Texto"
                    ref={descricaoRef}
                    defaultValue={tarefaEmEdicao?.descricao ?? ""}
                ></textarea>

                <button type="submit">
                    {tarefaEmEdicao ? "Salvar alterações" : "+ Nova Tarefa"}
                </button>
            </form>

        </>
    )

}



export default FormTarefa;
