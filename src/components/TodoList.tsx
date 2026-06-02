import type React from "react";
import type { ITodo } from "../ts/todos";
import { useState } from "react";
import {
  Check,
  RotateCcw,
  Pencil,
  Trash2,
  Save,
  X,
  ClipboardList,
} from "lucide-react";

interface ITodoListProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export default function TodoList({ todos, setTodos }: ITodoListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [confirmingId, setConfirmingId] = useState<number | null>(null);

  const confirmingTodo = todos.find((t) => t.id === confirmingId);

  return (
    <div className="space-y-2.5">
      {/* Delete Confirmation Modal */}
      {confirmingId !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setConfirmingId(null)}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl shadow-2xl shadow-slate-300/50 p-6 w-full max-w-sm mx-4 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-center text-slate-800 font-semibold text-base mb-1">
              Delete Task
            </h3>
            <p className="text-center text-slate-500 text-sm mb-5">
              Are you sure you want to delete{" "}
              <span className="font-medium text-slate-700">
                "{confirmingTodo?.task}"
              </span>
              ? This action cannot be undone.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setConfirmingId(null)}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-sm rounded-xl transition-colors duration-150"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
              <button
                onClick={() => {
                  setTodos((prev) => prev.filter((t) => t.id !== confirmingId));
                  setConfirmingId(null);
                }}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold text-sm rounded-xl transition-colors duration-150"
              >
                <Trash2 className="w-4 h-4" />
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-14 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
            <ClipboardList className="w-8 h-8 text-slate-300" />
          </div>
          <p className="text-slate-500 font-medium">No todos yet</p>
          <p className="text-slate-400 text-sm mt-1">
            Add one above to get started.
          </p>
        </div>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className={`flex flex-row items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-150 ${
              todo.isDone
                ? "bg-slate-50 border-slate-100"
                : "bg-white border-slate-200 shadow-sm shadow-slate-100"
            }`}
          >
            {editingId === todo.id ? (
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="flex-1 px-3 py-1.5 border border-slate-200 rounded-lg text-slate-700 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 text-sm"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setTodos((prev) =>
                        prev.map((t) =>
                          t.id === todo.id ? { ...t, task: editValue } : t,
                        ),
                      );
                      setEditingId(null);
                      setEditValue("");
                    }}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors duration-150"
                  >
                    <Save className="w-3.5 h-3.5" />
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setEditValue("");
                    }}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 text-xs font-semibold rounded-lg transition-colors duration-150"
                  >
                    <X className="w-3.5 h-3.5" />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span
                  className={`flex-1 min-w-0 text-sm leading-relaxed truncate ${
                    todo.isDone
                      ? "line-through text-slate-400"
                      : "text-slate-700 font-medium"
                  }`}
                >
                  {todo.task}
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      setTodos((prev) =>
                        prev.map((t) =>
                          t.id === todo.id ? { ...t, isDone: !t.isDone } : t,
                        ),
                      );
                    }}
                    className={`flex items-center gap-1 p-2 sm:px-2.5 sm:py-1.5 text-xs font-semibold rounded-lg transition-colors duration-150 ${
                      todo.isDone
                        ? "bg-amber-50 hover:bg-amber-100 text-amber-600 border border-amber-200"
                        : "bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200"
                    }`}
                  >
                    {todo.isDone ? (
                      <>
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Undo</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Done</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditValue(todo.task);
                    }}
                    className="flex items-center gap-1 p-2 sm:px-2.5 sm:py-1.5 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 text-blue-600 border border-blue-200 text-xs font-semibold rounded-lg transition-colors duration-150"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Edit</span>
                  </button>

                  <button
                    onClick={() => setConfirmingId(todo.id)}
                    className="flex items-center gap-1 p-2 sm:px-2.5 sm:py-1.5 bg-red-50 hover:bg-red-100 active:bg-red-200 text-red-500 border border-red-200 text-xs font-semibold rounded-lg transition-colors duration-150"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Delete</span>
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
