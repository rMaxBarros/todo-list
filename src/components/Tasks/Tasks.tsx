import { FormEvent, useContext, useState } from 'react';
import styles from './styles.module.scss';
import { TasksContext } from '../../Context/TasksContext';

export const Tasks: React.FC = () => {
    // ARRAY HOOKSTATE: taskTitle: o estado. setTaskTitle: função que redefine o valor do estado. É inicializado com uma string vazia nesse caso.
    const [taskTitle, setTaskTitle] = useState('');

    // Pegando as exportações do contexto de forma desestruturada.
    const { tasks, setTasks } = useContext(TasksContext);

    // Função disparada quando o usuário está querendo adicionar uma nova tarefa.
    function handleSubmitAddTask(event: FormEvent) {
        event.preventDefault();

        if (taskTitle.length <= 3) {
            alert('Não é possível adicionar uma tarefa com menos de três letras.');
            return; // Sai da função.
        }

        // Adiciona a tarefa
        const newTasks = [
            ...tasks, // ... pega todas as tarefas que já existiam e coloca no novo valor do estado de tarefas.
            { id: new Date().getTime(), title: taskTitle, done: false },
            // O id está recebendo um valor numérico que é sempre diferente, de acordo com a hora atual.
        ];
        // Essa variável newTasks precisa ser criada pois, ao usar o useState setTasks, para adicionar no storage, é necessário passar ela pois o conteúdo passado num useState demora um tempo para ser atualizado.
        setTasks(newTasks);
        // Salvando os itens no "banco de dados" do navegador.
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTaskTitle('');
    }

    // Inverte o status da tarefa.
    function handleToggleTasksStatus(taskId: number) {
        // Percorre as tasks (que vem do contexto, estão declaradas lá) com o map.
        const newTasks = tasks.map((task) => {
            if (taskId === task.id) {
                return {
                    ...task,
                    done: !task.done
                }
            }
            return task
        });

        setTasks(newTasks);

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
                {/* Map utilizado para renderização múltipla. */}
                {/* Ao abrir as primeiras {}, é como se entrasse no JS e com o return() retorna ao código HTML. É o padrão costumeiro de toda função etc. */}
                {tasks.map(task => {
                    return (
                        <li key={task.id}> {/* Todo filho de lista PRECISA ter um id único */}
                            <input
                                type="checkbox"
                                id={`task-${task.id}`}
                                onChange={() => handleToggleTasksStatus(task.id)}
                            />
                            {/* OnChange espera uma função e não a chamada de uma função. Como tem os parenteses, é uma chamada de função. Portanto, é necessário a ArrowFunction () => */}
                            <label
                                className={task.done ? styles.done : ''}
                                htmlFor={`task-${task.id}`}
                            >
                                {task.title}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}