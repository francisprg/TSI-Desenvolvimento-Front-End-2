import Tarefa from "../Tarefa/Tarefa";
import './style.css'
function ListaTarefas({ tarefas, excluirTarefa, adicionarEtapa, excluirEtapa, editarTarefa}) {

    return (
        <div className="task-list">
            {tarefas.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                    excluirTarefa={excluirTarefa}
                    adicionarEtapa={adicionarEtapa}
                    excluirEtapa={excluirEtapa}
                    editarTarefa={editarTarefa}
                />
            ))}
        </div>
    )
}

export default ListaTarefas;
