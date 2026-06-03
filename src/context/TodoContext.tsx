import {createContext} from "react"

 
 const TodoContext = createContext(undefined);
 

 export function TodoProvider(){


  return <TodoContext.Provider value={{}}> </TodoContext.Provider>

 }