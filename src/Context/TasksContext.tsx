import { createContext } from "react";

export const TasksContext = createContext({});

// Para passar tags HTML ou outros elementos para dentro de outro componente.
interface TasksProviderProps {
    children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ( { children }) => {
    return (
        // Retornando um provider que deriva de um contexto
        <TasksContext.Provider value={'Compartilhado'}>
            {children}
        </TasksContext.Provider>
    );
}
