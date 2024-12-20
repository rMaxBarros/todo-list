import { FormEvent, useState } from 'react';
import styles from './styles.module.scss';

// Como é em TypeScript, precisa ser fornecido a Tipagem do Array tasks.
interface Task {
    title: string;
    done: boolean;
    id: number;
}

export const Tasks: React.FC = () => {
    // ARRAY HOOKSTATE: taskTitle: o estado. setTaskTitle: função que redefine o valor do estado. É inicializado com uma string vazia nesse caso.
    const [taskTitle, setTaskTitle] = useState('');
    const [tasks, setTasks] = useState([] as Task[]);

    // Função disparada quando o usuário está querendo adicionar uma nova tarefa.
    function handleSubmitAddTask(event: FormEvent) {
        event.preventDefault();

        if (taskTitle.length <= 3) {
            alert('Não é possível adicionar uma tarefa com menos de três letras.');
            return; // Sai da função.
        }

        // Adicione a tarefa
        setTasks([
            ...tasks, // ... pega todas as tarefas que já existiam e coloca no novo valor do estado de tarefas.
            { id: 1, title: taskTitle, done: false },
        ]);
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