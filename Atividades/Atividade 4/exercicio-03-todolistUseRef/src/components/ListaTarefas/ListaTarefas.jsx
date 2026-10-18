import Tarefa from './../Tarefa/Tarefa';
import './style.css'

function ListaTarefas({ tarefas, excluirTarefa, editarTarefa, salvarEtapaTarefa, excluirEtapa }) {
    return (
        <>
            <h2 className="list-title">Lista de Tarefas:</h2>

            <div className="task-list">
                {tarefas.map((tarefa) => (
                    <Tarefa
                        key={tarefa.id}
                        tarefa={tarefa}
                        excluirTarefa={excluirTarefa}
                        editarTarefa={editarTarefa}
                        salvarEtapaTarefa={salvarEtapaTarefa}
                        excluirEtapa={excluirEtapa}
                    />
                ))}
            </div>
        </>
    );
}

export default ListaTarefas;