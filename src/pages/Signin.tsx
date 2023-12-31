import Form from "../components/SignForm";

function Signin() {
  return (
    <div className="w-64 h-64 rounded-lg shadow-md bg-blue-100">
      <h2>로그인</h2>
      <Form page="auth/signin" />
    </div>
  );
}

export default Signin;
