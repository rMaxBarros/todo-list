import { createContext, useEffect, useState } from "react";

export interface Task {
    title: string;
    done: boolean;
    id: number;
}

// Tipagem de exportação para evitar erros no TS.
interface TasksContextData {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>; //Valor obtido colocando o mouse em cima da variável setTasks.
    handleToggleTasksStatus: (taskId: number) => void // É uma função, que recebe um number e não retorna nada (void)
}

// Definindo a tipagem da exportação.
export const TasksContext = createContext({} as TasksContextData);

// Para passar tags HTML ou outros elementos para dentro de outro componente.
interface TasksProviderProps {
    children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState([] as Task[]);

    // Exibindo as tarefas armazenadas no LocalStorage mesmo com atualização da página
    useEffect(() => {
        const tasksOnLocalStorage = localStorage.getItem('tasks');

        if (tasksOnLocalStorage) {
            // Transforma o localStorage que está em String, pra um Array e joga dentro estado de Tarefas.
            setTasks(JSON.parse(tasksOnLocalStorage));
        }
    }, []);


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
        // Retornando um provider que deriva de um contexto
        // Dentro do contexto, compartilhando(EXPORTANDO) o array de tasks (interface acima no código)
        <TasksContext.Provider value={{
            tasks,
            setTasks,
            handleToggleTasksStatus,
        }}>
            {children}
        </TasksContext.Provider>
    );
}
