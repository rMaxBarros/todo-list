import { useState } from 'react';
import { Header } from './components/Header/Header';

import './styles/global.css';
import { Tasks } from './components/Tasks/Tasks';

function App() {
  const [toggle, setToggle] = useState(false);

  // O UseEffect será disparado sempre que alguma variável do array de dependências for alterada.
  // Por Padrão, sempre o UseEffect será disparado após a montagem do componente. (ComponentDidMount)
  // useEffect( () => {
  //   console.log('Executando a função do useEffect...');

  //   // ComponentWillUnmount é acionado no UseEffect dentro do return() passando uma função => {}, essa função é chamada Cleanup Function.
  //   return () => {
  //     console.log('Isso aqui vai ser executado quando o componente App for desmontado da tela');
  //   };
  // }, [toggle] );

  return (
    <>
      <Header />
      <Tasks />

      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </>
  );
}

export default App;
