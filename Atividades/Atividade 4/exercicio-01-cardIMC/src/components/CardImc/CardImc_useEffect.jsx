import { useEffect, useLayoutEffect, useState } from 'react';
import './cards.css';
import colorTrace from '../../functions/ColorTrace';

export default function CardImc({ pessoa }) {


  const [peso, setPeso] = useState(pessoa.peso);
  const alt = pessoa.altura;

  const [imc, setImc] = useState(() => {
    colorTrace('CardImc: Lazy initialize', 'red');
    return (peso / alt ** 2).toFixed(2);
  });


  function incrementaPeso () {
   
    setPeso(peso + 1)
  }

  function decrementaPeso() {
  
  setPeso(peso - 1)
  }


  function corIMC (imc) {

    if (imc >= 30) {
    return 'imcRed';
    } else if (imc > 24.5) {
    return 'imcYellow';
    }
    else{
        return 'imcGreen'
    }



  }

  useEffect(() => {
    colorTrace('CardImc: Effect [peso]', 'orange');
    setTimeout(() => {
      setImc((peso / alt ** 2).toFixed(2));
    }, 10);
    return () => {
      colorTrace('CardImc: Cleanup Effect', 'darkgoldenrod');
    };
  }, [peso]);




  useLayoutEffect(() => {

    colorTrace('CardImc: Layout Effect', 'darkmagenta');

    return () => {
      colorTrace('CardImc: Cleanup Layout Effect', 'violet');
    };
  }, []);




  useEffect(() => {
    colorTrace('CardImc: Effect []', 'orange');
    return () => {
      colorTrace('CardImc: Cleanup Effect', 'darkgoldenrod');
    };
  }, []);




  // console.log({ peso, alt, imc, imc2: (peso / alt ** 2).toFixed(2) });

  return (
    <div className={`imcCard ${corIMC(imc)}`}>
      <h1>{pessoa.name}:</h1>
      <p>Altura: {alt} m</p>
      <p>Peso: {peso}</p>
      <p>Imc: {imc}</p>
      <button onClick={incrementaPeso}>+</button>
      <button onClick={decrementaPeso}>-</button>
    </div>

   

  );
}
