import Illustration from "../Illustration";
import login from "../../assests/images/login.svg"
import LoginForm from "../LoginForm";


export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration >
          <img src={login} alt="login"/>
        </Illustration>
       <LoginForm/>
      </div>
    </>
  );
}