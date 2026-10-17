import { useEffect, useLayoutEffect, useState } from 'react';
import CardImc from '../CardImc/CardImc_useEffect';
import colorTrace from '../../functions/ColorTrace';


export default function HooksFlow({ArrayPessoas}) {
  const [isOpen, setIsOpen] = useState(() => {
    colorTrace('Parent Component: Lazy initialize', 'green');
    return false;
  });



  const [pessoas, setPessoa] = useState(() => {
    let pessoas = ArrayPessoas
    
    return pessoas
  });

  useLayoutEffect(() => {
    colorTrace('Parent Component: Layout Effect', 'lightcoral');
    return () => {
      colorTrace('Parent Component: Cleanup Layout Effect', 'pink');
    };
  }, []);

  useEffect(() => {
    colorTrace('Parent Component: Effect', 'darkorange');
    return () => {
      colorTrace('Parent Component: Cleanup Effect', 'yellow');
    };
  }, []);

  
  return (
    <>
      {isOpen && pessoas.map((pessoa) => (
        <CardImc key={pessoa.name} pessoa={pessoa} />
      ))}

      <hr />


      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? 'Esconder' : 'Mostrar'}
      </button>
    </>
  );
}

