import { createContext, useContext, useState } from "react";
import type { ITodo } from "../ts/todos";


interface ITodoContext {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoContext = createContext<ITodoContext |null >(null)

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
   
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext(TodoContext){


  const context =  useContext(TodoContext)

  if(!context)

}