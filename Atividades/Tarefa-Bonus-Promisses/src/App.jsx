import { useRef, useState } from 'react'
import coffeLogo from './assets/js-coffe.svg'
import './App.css'


function App() {


  const [botaoSolicitarCafe, setBotaoSolicitarCafe] = useState(true);
  const [qtdCafeDisponivel, setQtdCafeDisponivel] = useState(3)
  const inputName = useRef(null)

  const fazerCafe = nome => new Promise((resolve, reject) => {
    if (qtdCafeDisponivel <= 0) {
      return reject('Acabou o café!!!')
    }
    setQtdCafeDisponivel(qtdCafeDisponivel - 1)
    console.log(`Preparando o café de ${nome} !!!`)
    setTimeout(() => {
      resolve(`${nome} ! Seu café está pronto!!!`)
    }, 5000)
  })





  const ReabastecerCafe = () => new Promise((resolve, reject) => {
    if (qtdCafeDisponivel != 0) {
      return reject('Ainda tem cafe disponivel')
    };
    setQtdCafeDisponivel(qtdCafeDisponivel + 3);

    setTimeout(() => {
      resolve("O cafe foi reabastecido!!")
    }, 5000)
  })



  const solicitaCafe = async () => {
    const nome = inputName.current.value
    inputName.current.value = ''
    inputName.current.focus()

    try {
      const resultado = await fazerCafe(nome)//aguarda o retorno da promise
      console.log(resultado)//executa após a resolução da promise
      alert(resultado)
    } catch (error) {
      console.error(error)
      alert(`Desculpe ${nome}! Não podemos atender seu pedido agora. ${error}`)
    } finally {
      console.log(`Obrigado pela preferência ${nome}!!!`)
    }
  }


  const solicitaReabastecerCafe = async () => {
    try {
      setBotaoSolicitarCafe(false);

      const resultado = await ReabastecerCafe();

      alert(resultado);

    } catch (error) {
      alert('Desculpe, não foi possível reabastecer: ' + error);

    } finally {
      setBotaoSolicitarCafe(true);
      console.log('Obrigado!!');
    }
  }



  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={coffeLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Peça um Café!</h1>
      <div className="card">
        <input type='text' ref={inputName} placeholder='Seu nome!!' />
        <hr />
        <button
          onClick={solicitaCafe}
          disabled={!botaoSolicitarCafe}
        >
          Pedir um Café!!!
        </button>

        <button onClick={() => solicitaReabastecerCafe()} >
          Reabastecer Café!
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App