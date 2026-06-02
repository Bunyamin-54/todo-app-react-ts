import React, { useState, type ChangeEvent } from "react";
import { Plus } from "lucide-react";
import type { ITodo } from "../ts/todos";

interface ITodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export default function TodoForm({ setTodos }: ITodoFormProps) {
  const [task, setTask] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: ITodo = {
      id: Date.now(),
      task: task,
      isDone: false,
    };

    setTodos((oncekiTodolar) => [newTask, ...oncekiTodolar]);
    setTask("");
  };

  return (
    <form
      className="flex flex-col sm:flex-row gap-2 mb-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="todo"
        value={task}
        required
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="self-end sm:self-auto flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl transition-colors duration-150 shadow-sm shadow-blue-200 whitespace-nowrap"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  );
}
