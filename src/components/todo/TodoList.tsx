import { useEffect, useState } from "react";
import { onGetTodo, onDeleteTodo } from "../../api/api";
import UpdateInput from "./UpdateInput";
import ListInput from "./ListInput";

export interface TodoInfo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

function TodoList() {
  const token = localStorage.getItem("token");
  const [getTodo, setGetTodo] = useState<TodoInfo[]>([]);
  const [updateId, setUpdateId] = useState<number>(0);

  useEffect(() => {
    onGetTodo(token!).then((res) => {
      return setGetTodo(res?.data);
    });
  }, []);

  const updateHandler = (id: number) => {
    setUpdateId(id);
  };

  return (
    <div>
      <ul className="overflow-y-auto h-56">
        {getTodo.map((todo) => {
          return todo.id === updateId ? (
            <UpdateInput todo={todo} />
          ) : (
            <ListInput todo={todo} updateHandler={updateHandler} />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
