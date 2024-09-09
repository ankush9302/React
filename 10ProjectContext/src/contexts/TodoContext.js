import { createContext, useContext } from 'react';

// Create the context
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "sample todo",
            completed: false,
        }
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {},
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider