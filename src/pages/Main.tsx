import { FcTodoList } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div className="py-80 px-12 rounded-lg shadow-md bg-blue-100">
      <div className="flex justify-center py-10 px-1 rounded-lg bg-red-100">
        {" "}
        <FcTodoList size="5rem" />
        <p className="p-6 text-2xl font-bold rounded-lg bg-blue-100">
          To do List
        </p>
      </div>

      <button
        className="py-2 px-4 font-semibold rounded-lg shadow-md bg-blue-200 hover:bg-blue-300"
        onClick={() => {
          navigate(`/signup`);
        }}
      >
        Sign Up
      </button>
      <button
        className="py-2 px-4 font-semibold rounded-lg shadow-md bg-blue-200 hover:bg-blue-300"
        onClick={() => {
          navigate(`/signin`);
        }}
      >
        Sign In
      </button>
      <button
        className="py-2 px-4 font-semibold rounded-lg shadow-md bg-blue-200 hover:bg-blue-300"
        onClick={() => {
          navigate(`/todo`);
        }}
      >
        To Do List
      </button>
    </div>
  );
}

export default Main;
