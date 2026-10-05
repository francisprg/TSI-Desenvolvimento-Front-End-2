import FormularioTarefas from "../FormularioTarefas/FormularioTarefas";
import './style.css'

function ListaDeTarefas({ aoAdicionar }) {

    return (
        <FormularioTarefas aoAdicionar={aoAdicionar} />
    )

}

export default ListaDeTarefas