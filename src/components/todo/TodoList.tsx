import { useState } from "react";
import UpdateInput from "./UpdateInput";
import ListInput from "./ListInput";
import { TodoInfo } from "../../pages/Todo";
import { onUpdateTodo, onGetTodo } from "../../api/api";

function TodoList({
  getTodo,
  setGetTodo,
}: {
  getTodo: TodoInfo[];
  setGetTodo: Function;
}) {
  const [updateId, setUpdateId] = useState<number>(0);
  const token = localStorage.getItem("token");

  const checkHandler = (todo: TodoInfo) => {
    onUpdateTodo(token!, todo.id, todo.todo, !todo.isCompleted).then((res) => {
      onGetTodo(token!).then((res) => {
        setGetTodo(res?.data);
      });
    });
  };

  const updateHandler = (id: number) => {
    setUpdateId(id);
  };

  return (
    <div>
      <ul className="overflow-y-auto h-56 ">
        {getTodo.map((todo) => {
          return (
            <li className="flex" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => checkHandler(todo)}
              ></input>
              {todo.id === updateId ? (
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
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
