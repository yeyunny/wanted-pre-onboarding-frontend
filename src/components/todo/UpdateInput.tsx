import { TodoInfo } from "./TodoList";

function UpdateInput({ todo }: { todo: TodoInfo }) {
  return (
    <div>
      <input type="checkbox"></input>
      <input data-testid="modify-input" />
      <button data-testid="submit-button">제출</button>
      <button data-testid="cancel-button">취소</button>
    </div>
  );
}

export default UpdateInput;
