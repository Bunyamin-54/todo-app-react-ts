import Header from "./components/Header";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import type { ITodo } from "./ts/todos";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-slate-200 flex items-start justify-center p-3 pt-8 sm:p-4 sm:pt-16">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-slate-200/80 p-4 sm:p-8">
        <Header />
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
