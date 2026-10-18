import { useRef, useState } from "react"
import './style.css'

function Tarefa({ tarefa, excluirTarefa, editarTarefa, salvarEtapaTarefa, excluirEtapa }) {

    const [mostrarFormEtapa, setMostrarFormEtapa] = useState(false);
    const [mostrarEtapas, setmostrarEtapas] = useState(false);
    const descricaoEtapaRef = useRef(null);

    function criarEtapa(event) {
        event.preventDefault();

        const descricao = descricaoEtapaRef.current.value.trim();

        if (!descricao) return;

        const novaEtapa = {
            id: Date.now(),
            descricao: descricao,
        };

        salvarEtapaTarefa(tarefa.id, novaEtapa);
        descricaoEtapaRef.current.value = "";
    }


    return (
        <article className="task-card">
            <h1>{tarefa.titulo}</h1>

            <button onClick={() => excluirTarefa(tarefa.id)}>🗑️</button>
            <button onClick={() => editarTarefa(tarefa)}>✏️</button>


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
                <form onSubmit={criarEtapa}>
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
