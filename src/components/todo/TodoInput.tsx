import { useState } from "react";
import { onCreateTodo, onGetTodo } from "../../api/api";

export interface InputHandler {
  preventDefault: () => void;
  target: { value: React.SetStateAction<string> };
}

export interface SubmitHandler {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

function TodoInput({ setGetTodo }: { setGetTodo: Function }) {
  const [todoInput, setTodoInput] = useState("");

  const inputHandler = (event: InputHandler) => {
    setTodoInput(event.target.value);
  };

  const token = localStorage.getItem("token");

  const submitHandler = () => {
    onCreateTodo(todoInput, token!).then((res) => {
      onGetTodo(token!).then((res) => {
        setGetTodo(res?.data);
        setTodoInput("");
      });
    });
  };

  return (
    <div>
      <input
        data-testid="new-todo-input"
        className="bg-yellow-100 placeholder-black border border-gray-400"
        placeholder="오늘 할 일"
        value={todoInput}
        onChange={inputHandler}
      ></input>
      <button
        data-testid="new-todo-add-button"
        className="bg-red-100 placeholder-black border border-gray-400"
        onClick={submitHandler}
      >
        추가
      </button>
    </div>
  );
}

export default TodoInput;
