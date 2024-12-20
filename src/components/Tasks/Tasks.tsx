import { FormEvent, useState } from 'react';
import styles from './styles.module.scss';

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState('');
    // ARRAY HOOKSTATE: taskTitle: o estado. setTaskTitle: função que redefine o valor do estado. É inicializado com uma string vazia nesse caso.

    function handleSubmitAddTask(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmitAddTask}>
                <div>
                    <label htmlFor="task-title">Adicionar Tarefa</label>
                    <input
                        value={taskTitle}
                        onChange={(event) => setTaskTitle(event.target.value)} // Pega o valor digitado e joga dentro do estado. 
                        type="text"
                        id='task-title'
                        placeholder='Título da Tarefa'
                    />
                </div>

                <button type='submit'>Adicionar Tarefa</button>
            </form>

            <ul>
                <li>
                    <input type="checkbox" id="task" />
                    <label htmlFor="task">Tarefa 1</label>
                </li>
                <li>
                    <input type="checkbox" id="task" />
                    <label htmlFor="task">Tarefa 1</label>
                </li>
            </ul>
        </section>
    )
}