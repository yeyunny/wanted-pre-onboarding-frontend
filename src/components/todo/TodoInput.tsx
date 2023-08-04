import { useRef, useState } from "react";
import { onCreateTodo } from "../../api/api";

interface InputHandler {
  preventDefault: () => void;
  target: { value: React.SetStateAction<string> };
}

export interface SubmitHandler {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

function TodoInput() {
  const [todoInput, setTodoInput] = useState("");
  const [addTodo, setAddTodo] = useState<SubmitHandler[]>([]);

  const inputHandler = (event: InputHandler) => {
    setTodoInput(event.target.value);
  };

  const userId = useRef(0);
  const token = localStorage.getItem("token");

  const submitHandler = () => {
    let dateId = Date.now();
    setAddTodo((prev: SubmitHandler[]) => [
      ...prev,
      {
        id: dateId,
        todo: todoInput,
        isCompleted: false,
        userId: userId.current,
      },
    ]);
    userId.current = userId.current + 1;

    onCreateTodo(todoInput, token!);
  };

  return (
    <div>
      <input
        data-testid="new-todo-input"
        className="bg-yellow-100 placeholder-black border border-gray-400"
        placeholder="오늘 할 일"
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
