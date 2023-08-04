import { useEffect, useState } from "react";
import { onGetTodo } from "../../api/api";

function TodoList() {
  const token = localStorage.getItem("token");
  const [getTodo, setGetTodo] = useState<object[]>([]);

  useEffect(() => {
    onGetTodo(token!).then((res) => {
      return setGetTodo(res?.data);
    });
  }, []);
  console.log(getTodo);

  return <div>todoList</div>;
}

export default TodoList;
