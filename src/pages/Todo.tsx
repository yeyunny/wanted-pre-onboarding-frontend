// import { useState } from "react";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
// export interface InputHandler {
//   preventDefault: () => void;
//   target: { value: React.SetStateAction<string> };
// }

// interface TodoList {
//   id: number;
//   todo: string;
// }

// 안되는 거
// 1) 로그인 페이지 - 리다이렉트 고치기
// 2) TODO 추가하고 input창 내용 그대로임 - 삭제하고 시픔
// 3) TODO 추가하고 새로고침하면 TODO 목록 사라짐
// 4) 체크 박스를 통해 완료 여부 수정? : 현재는 그냥 체크만 가능
// 5) 수정 기능 구현 불가

function Todo() {
  // const [todoInput, setTodoInput] = useState("");
  // const [todos, setTodos] = useState<TodoList[]>([]);

  // const inputHandler = (event: InputHandler) => {
  //   setTodoInput(event.target.value);
  // };

  // const submiHandler = () => {
  //   let dateId = Date.now();
  //   setTodos((prev: TodoList[]) => [...prev, { id: dateId, todo: todoInput }]);
  //   setTodoInput("");
  // };

  // // const changeHandler = (todoId: number, newTodo: string) => {};

  // const deleteHandler = (todoId: number) => {
  //   const list = todos.filter((item: TodoList) => item.id !== todoId);
  //   setTodos(list);
  // };

  return (
    <div className="w-64 h-64 rounded-lg shadow-md bg-blue-100">
      <TodoInput />
      <TodoList />
      {/* <input
        data-testid="new-todo-input"
        className="bg-yellow-100 placeholder-black border border-gray-400"
        placeholder="오늘 할 일"
        onChange={inputHandler}
      ></input>
      <button
        data-testid="new-todo-add-button"
        className="bg-red-100 placeholder-black border border-gray-400"
        onClick={submiHandler}
      >
        추가
      </button>
      <div>
        {todos.map((todo: TodoList) => {
          return (
            <div>
              <li>
                <label>
                  <input type="checkbox"></input>
                  <span key={todo.id}>{todo.todo}</span>
                </label>
                <button
                  data-testid="modify-button"
                  className="bg-green-200 rounded-lg border border-gray-400"
                  // onClick={() => changeHandler(todo.id, todo.todo)}
                >
                  수정
                </button>
                <button
                  data-testid="delete-button"
                  className="bg-red-200 rounded-lg  border border-gray-400"
                  onClick={() => deleteHandler(todo.id)}
                >
                  삭제
                </button>
              </li>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default Todo;
