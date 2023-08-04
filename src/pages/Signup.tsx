import Form from "../components/SignForm";

function Signup() {
  return (
    <div className="w-64 h-64 rounded-lg shadow-md bg-blue-100">
      <h2>회원 가입</h2>
      <Form page="auth/signup" />
    </div>
  );
}

export default Signup;
