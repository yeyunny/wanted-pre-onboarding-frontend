import { TodoInfo } from "./TodoList";
import { onDeleteTodo } from "../../api/api";

function ListInput({
  todo,
  updateHandler,
}: {
  todo: TodoInfo;
  updateHandler: Function;
}) {
  const token = localStorage.getItem("token");

  const deleteHandler = (token: string, id: number) => {
    onDeleteTodo(token, id).then((res) => {
      return console.log("삭제 완료 !");
    });
  };

  return (
    <li>
      <label>
        <input type="checkbox"></input>
        <span key={todo.id}>{todo.todo}</span>
      </label>
      <button
        data-testid="modify-button"
        className="bg-green-200 rounded-lg border border-gray-400"
        onClick={() => updateHandler(todo.id)}
      >
        수정
      </button>
      <button
        data-testid="delete-button"
        className="bg-red-200 rounded-lg  border border-gray-400"
        onClick={() => deleteHandler(token!, todo.id)}
      >
        삭제
      </button>
    </li>
  );
}

export default ListInput;
