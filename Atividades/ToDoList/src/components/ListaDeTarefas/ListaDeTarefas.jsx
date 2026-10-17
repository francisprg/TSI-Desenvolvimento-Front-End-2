import FormularioTarefas from "../FormularioTarefas/FormularioTarefas";
import './style.css'

function ListaDeTarefas({ adicionarTarefa }) {

    return (
        <FormularioTarefas adicionarTarefa={adicionarTarefa} />
    )

}

export default ListaDeTarefas