import { useNavigate } from "react-router-dom";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import { useEffect, useState } from "react";
import { onGetTodo } from "../api/api";

export interface TodoInfo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

function Todo() {
  const [getTodo, setGetTodo] = useState<TodoInfo[]>([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate(`/signin`);
    } else {
      onGetTodo(token!).then((res) => {
        return setGetTodo(res?.data);
      });
    }
  }, [navigate, token]);

  return (
    <div className="w-64 h-64 rounded-lg shadow-md bg-blue-100">
      <TodoInput setGetTodo={setGetTodo} />
      <TodoList getTodo={getTodo} setGetTodo={setGetTodo} />
    </div>
  );
}

export default Todo;
