
import './App.css'

import FormTarefa from './components/FormTarefa/FormTarefa';
import ListaTarefas from './components/ListaTarefas/ListaTarefas';
import { TodoListProvider } from './providers/TodoListProvider';



function App() {

 



  return (
    <>
     <TodoListProvider>
      <FormTarefa />
      <ListaTarefas/>
    </TodoListProvider>
    </>
  );






}



export default App
