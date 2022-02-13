import Signupimg from "../../assests/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration>
          <img src={Signupimg} alt="signup" />
        </Illustration>
        <SignupForm />
      </div>
    </>
  );
}
