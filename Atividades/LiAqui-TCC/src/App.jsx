
import './App.css'
import Home from './pages/Home/Home';
import { MockDadosProvider } from './providers/MockDadosProvider';




function App() {
 

  return (
    <>
    <MockDadosProvider>
      <Home/>
    </MockDadosProvider>
    </>
  )
}

export default App
