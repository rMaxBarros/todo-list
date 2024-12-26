import { useContext } from 'react';
import { StatsCard } from '../StatsCard/StatsCard';
import styles from './styles.module.scss';
import { TasksContext } from '../../Context/TasksContext';
// Importando assim, evita o conflito de tags entre diferentes componentes pois é um criado um identificador único para cada uso.

// Indicando que a constante Header é do tipo FC(Componente funcional)
// Tecnicamente não é necessário isso. É apenas para impedir que a função não retorne nada.
export const Header: React.FC = () => {
    const { tasks } = useContext(TasksContext);
    console.log('Header:', tasks);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>My Todo</h1>
                    <span>Bem-vindo, Max!</span>
                </div>

                <div>
                    <StatsCard
                        title='Total de Tarefas'
                        value={5}
                    />
                    <StatsCard
                        title='Tarefas Pendentes'
                        value={4}
                    />
                    <StatsCard
                        title='Tarefas Concluídas'
                        value={1}
                    />
                </div>
            </div>
        </header>
    );
}
