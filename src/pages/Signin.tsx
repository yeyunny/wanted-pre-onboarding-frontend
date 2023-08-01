import Form from "../components/Form";

function Signin() {
  return (
    <div className="w-64 h-64 rounded-lg shadow-md bg-blue-100">
      <Form page="auth/signin" />
    </div>
  );
}

export default Signin;
