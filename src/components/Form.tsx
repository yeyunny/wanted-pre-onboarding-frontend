import { useState } from "react";
import { signController } from "../api/api";
import { useNavigate } from "react-router-dom";

interface Form {
  "email-input": string;
  "password-input": string;
}

function Form({ page }: { page: string }) {
  const [form, setForm] = useState<Form>({
    "email-input": "",
    "password-input": "",
  });

  const isEmail = form["email-input"].includes("@");
  const isPassword = form["password-input"].length >= 8;
  const isValid = !(isEmail && isPassword);
  const navigate = useNavigate();

  const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.getAttribute("data-testid");
    setForm({ ...form, [targetName!]: event.target.value });
  };

  const buttonHandler = () => {
    signController(page, form["email-input"], form["password-input"]).then(
      (response) => {
        if (page === "auth/signup") {
          navigate("/signin");
        } else {
          localStorage.setItem("token", response.data.access_token);
          navigate("/todo");
        }
      }
    );
  };

  return (
    <div className="">
      <input
        data-testid="email-input"
        value={form["email-input"]}
        className="text-center tracking-widest justify-center w-48 h-12 rounded-lg bg-red-100"
        placeholder="ID"
        onChange={formHandler}
      ></input>
      <input
        data-testid="password-input"
        value={form["password-input"]}
        className="text-center tracking-widest justify-center w-48 h-12 rounded-lg bg-yellow-100"
        placeholder="PASSWORD"
        onChange={formHandler}
      ></input>
      <button
        data-testid="signup-button"
        disabled={isValid}
        className="w-32 h-12 tracking-widest font-bold rounded-lg shadow-md bg-blue-200 hover:bg-blue-300"
        onClick={buttonHandler}
      >
        Enter
      </button>
    </div>
  );
}

export default Form;
