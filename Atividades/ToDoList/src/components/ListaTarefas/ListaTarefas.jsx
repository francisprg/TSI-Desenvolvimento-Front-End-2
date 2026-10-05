import Tarefa from "../Tarefa/Tarefa";
import './style.css'
function ListaTarefas({ tarefas, aoExcluir, adicionarEtapa, deletarEtapa, editarTarefa}) {

    return (
        <div className="task-list">
            {tarefas.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                    aoExcluir={aoExcluir}
                    AdicionarEtapa={adicionarEtapa}
                    deletarEtapa={deletarEtapa}
                    editarTarefa={editarTarefa}
                />
            ))}
        </div>
    )
}

export default ListaTarefas;