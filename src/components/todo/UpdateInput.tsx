import { TodoInfo } from "../../pages/Todo";
import { InputHandler } from "./TodoInput";
import { useState } from "react";
import { onUpdateTodo, onGetTodo } from "../../api/api";

function UpdateInput({
  todo,
  setGetTodo,
  setUpdateId,
}: {
  todo: TodoInfo;
  setGetTodo: Function;
  setUpdateId: Function;
}) {
  const [changeTodoInput, setChangeTodoInput] = useState(todo.todo);

  const token = localStorage.getItem("token");

  const updateInputHandler = (event: InputHandler) => {
    setChangeTodoInput(event.target.value);
  };

  const updateButtonHandler = () => {
    onUpdateTodo(token!, todo.id, changeTodoInput).then((res) => {
      onGetTodo(token!).then((res) => {
        setGetTodo(res?.data);
        cancelButtonHandler();
      });
    });
  };

  const cancelButtonHandler = () => {
    setUpdateId(0);
  };

  return (
    <div>
      <input type="checkbox"></input>
      <input
        data-testid="modify-input"
        value={changeTodoInput}
        onChange={updateInputHandler}
      />
      <button data-testid="submit-button" onClick={updateButtonHandler}>
        제출
      </button>
      <button
        data-testid="cancel-button"
        value={changeTodoInput}
        onClick={cancelButtonHandler}
      >
        취소
      </button>
    </div>
  );
}

export default UpdateInput;
