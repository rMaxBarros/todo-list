import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { TasksProvider } from './Context/TasksContext';

import './styles/global.css';

function App() {
  // Todos os componentes dentro do TaskProvider, conseguem acessar todas as variáveis do Contexto.
  return (
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  );
}

export default App;
