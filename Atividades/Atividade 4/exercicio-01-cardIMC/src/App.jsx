import './App.css';
import HooksFlow from './components/HooksFlow/HooksFlow';

function App() {


  const pessoas = [
    { name: "Fulano", altura: 1.7, peso: 80 },
    { name: "Mengano", altura: 1.9, peso: 109 },
    { name: "Esbelto", altura: 1.8, peso: 70 }
  ];

  return (
    <>
      <h1>Hooks Flow</h1>
      <HooksFlow ArrayPessoas={pessoas} />
    </>
  );
}

export default App;