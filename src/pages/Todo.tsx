import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import { useState } from "react";

export interface TodoInfo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

function Todo() {
  const [getTodo, setGetTodo] = useState<TodoInfo[]>([]);

  return (
    <div className="w-64 h-64 rounded-lg shadow-md bg-blue-100">
      <TodoInput setGetTodo={setGetTodo} />
      <TodoList getTodo={getTodo} setGetTodo={setGetTodo} />
    </div>
  );
}

export default Todo;
