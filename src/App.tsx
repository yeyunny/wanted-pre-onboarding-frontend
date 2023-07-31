import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
