import React, {createContext} from "react"

 
 const TodoContext = createContext(null);
 

 export function TodoProvider({children}: {children:React.ReactNode}){


  return <TodoContext.Provider value={{}}>{children} </TodoContext.Provider>

 }