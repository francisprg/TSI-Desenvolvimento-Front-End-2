import { useContext } from 'react';
import Tarefa from '../Tarefa/Tarefa';
import './style.css'
import TodolistContext from '../../context/TodoListContext';
 

function ListaTarefas({excluirTarefa, editarTarefa, salvarEtapaTarefa, excluirEtapa }) {

    const {tarefas} = useContext(TodolistContext);

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