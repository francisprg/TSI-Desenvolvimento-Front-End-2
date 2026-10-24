
import './App.css'
import Home from './pages/Home/Home';
import livros from './mock/livros.json';



function App() {
 

  return (
    <>
      <Home livros={livros}/>
    </>
  )
}

export default App
