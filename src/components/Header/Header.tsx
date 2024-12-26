import { useContext } from 'react';
import { StatsCard } from '../StatsCard/StatsCard';
import styles from './styles.module.scss';
import { TasksContext } from '../../Context/TasksContext';
// Importando assim, evita o conflito de tags entre diferentes componentes pois é um criado um identificador único para cada uso.

// Indicando que a constante Header é do tipo FC(Componente funcional)
// Tecnicamente não é necessário isso. É apenas para impedir que a função não retorne nada.
export const Header: React.FC = () => {
    const { tasks } = useContext(TasksContext);
    // console.log('Header:', tasks);

    const totalTasks = tasks.length;

    const totalPending = tasks.reduce((total, task) => {
        if (!task.done) return total + 1; // Se o total for 0 e a tarefa não tiver concluída, conclui e aumenta 1.
        return total; // Se tiver concluída, continua em 0.
    }, 0); // Inicia o total com 0

    const totalDone = totalTasks - totalPending;

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
                        value={totalTasks}
                    />
                    <StatsCard
                        title='Tarefas Pendentes'
                        value={totalPending}
                    />
                    <StatsCard
                        title='Tarefas Concluídas'
                        value={totalDone}
                    />
                </div>
            </div>
        </header>
    );
}
