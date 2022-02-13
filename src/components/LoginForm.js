import { Link,useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [agree,setAgree] = useState("");

    const [error,setError] = useState();

    const [loading,setLoading] = useState();

    const {login} = useAuth();
    const history = useHistory();
    async function  handleSubmit(e) {
        e.preventDefault();

        try{
            setError('')
            setLoading(true);
            await login(email,password);
            history.push("/");
          
        }catch(err){
         console.log(err);
         setLoading(false);
         setError("Fail to Login ")
        }
    }

  return (
    <Form style={{ height: "300px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter Email"
        icon="alternate_email"
        requried="true"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter Password"
        icon="lock"
        requried="true"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Checkbox
        text="I agree to the tems &amp; Conditions"
        requried="true"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      <Button type="submit" disable={loading}>
        <span>Submit Button</span>{" "}
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link href="login.html">Login</Link> instead.
      </div>
    </Form>
  );
}
