import { useEffect, useState } from "react";
import { onGetTodo } from "../../api/api";
import UpdateInput from "./UpdateInput";
import ListInput from "./ListInput";
import { TodoInfo } from "../../pages/Todo";

function TodoList({
  getTodo,
  setGetTodo,
}: {
  getTodo: TodoInfo[];
  setGetTodo: Function;
}) {
  const token = localStorage.getItem("token");

  const [updateId, setUpdateId] = useState<number>(0);

  useEffect(() => {
    onGetTodo(token!).then((res) => {
      return setGetTodo(res?.data);
    });
  }, [setGetTodo, token]);

  const updateHandler = (id: number) => {
    setUpdateId(id);
  };

  return (
    <div>
      <ul className="overflow-y-auto h-56">
        {getTodo.map((todo) => {
          return todo.id === updateId ? (
            <UpdateInput
              key={todo.id}
              todo={todo}
              setGetTodo={setGetTodo}
              setUpdateId={setUpdateId}
            />
          ) : (
            <ListInput
              key={todo.id}
              todo={todo}
              updateHandler={updateHandler}
              setGetTodo={setGetTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
