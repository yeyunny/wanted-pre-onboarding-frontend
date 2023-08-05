import { TodoInfo } from "../../pages/Todo";
import { onDeleteTodo, onGetTodo } from "../../api/api";

function ListInput({
  todo,
  updateHandler,
  setGetTodo,
}: {
  todo: TodoInfo;
  updateHandler: Function;
  setGetTodo: Function;
}) {
  const token = localStorage.getItem("token");

  const deleteHandler = (token: string, id: number) => {
    onDeleteTodo(token, id).then((res) => {
      onGetTodo(token!).then((res) => {
        setGetTodo(res?.data);
      });
      alert("삭제 완료 !");
    });
  };

  return (
    <div>
      <label>
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
    </div>
  );
}

export default ListInput;
