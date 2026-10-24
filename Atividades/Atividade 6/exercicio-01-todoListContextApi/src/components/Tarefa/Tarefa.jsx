import { useContext, useState } from "react"
import './style.css'
import TodolistContext from "../../context/TodoListContext";

function Tarefa({tarefa}) {

    const [mostrarFormEtapa, setMostrarFormEtapa] = useState(false);
    const [mostrarEtapas, setmostrarEtapas] = useState(false);

    const {excluirTarefa, editarTarefa, criarEtapa, excluirEtapa, descricaoEtapaRef} = useContext(TodolistContext)

    return (
        <article className="task-card">
            <h1>{tarefa.titulo}</h1>

            <button onClick={() => excluirTarefa(tarefa.id)}>🗑️</button>
            <button onClick={() => editarTarefa(tarefa.id)}>✏️</button>


            <button onClick={() => setMostrarFormEtapa((prev) => !prev)}>
                {mostrarFormEtapa ? "Cancelar" : "Adicionar etapa"}
            </button>


            <button onClick={() => setmostrarEtapas((prev) => !prev)}>
                {mostrarEtapas ? "Esconder etapas ⬆" : "Ver etapas ⬇"}
            </button>


            <details className="task-description">
                <summary>Descrição</summary>
                <p>{tarefa.descricao}</p>
            </details>


            {mostrarEtapas && (
                <ol>
                    {(tarefa.etapas ?? []).map((etapa) => (
                        <li key={etapa.id}>
                            {etapa.descricao}

                            <button onClick={() => excluirEtapa(tarefa.id, etapa.id)}>
                                🗑️
                            </button>
                        </li>
                    ))}
                </ol>
            )}

            {mostrarFormEtapa && (
                <form onSubmit={(event) => criarEtapa (event, tarefa.id)}>
                    <input
                        type="text"
                        placeholder="Nome da etapa"
                        ref={descricaoEtapaRef}
                    />

                    <button type="submit">Salvar etapa</button>
                </form>
            )}

        </article>
    )


}

export default Tarefa
