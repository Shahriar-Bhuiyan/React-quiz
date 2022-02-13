import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../context/AuthContext";
import {useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SignupForm() {

     const [username,setUsername] = useState("");
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const [confirmPassword,setConfirmPassword] = useState("");
     const [agree,setAgree] = useState("");
     const [error,setError] = useState();
     const [loading,setLoading] = useState();

    const {signup} = useAuth();
    const history = useHistory();
    async function  handleSubmit(e) {
        e.preventDefault();
        if(password !== confirmPassword){
            return setError("passwords don't match")
        }

        try{
            setError('')
            setLoading(true);
            await signup(email,password,username);
            history.push("/");
          
        }catch(err){
         console.log(err);
         setLoading(false);
         setError("Fail to Create an account")
        }
    }
    return(
        <Form style={{height:"500px"}} onSubmit={handleSubmit}>
        <TextInput type="text" placeholder="Enter Name" requried="true" icon="person" value={username} onChange={(e)=> setUsername(e.target.value)} />

        <TextInput type="text" placeholder="Enter Email" icon="alternate_email" requried="true" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        
        <TextInput type="password" placeholder="Enter Password" icon="lock" requried="true" value={password} onChange={(e)=> setPassword(e.target.value)}/>

        <TextInput type="password" placeholder="confirm password" icon="lock_clock" requried="true" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>

        <Checkbox text="I agree to the tems &amp; Conditions" requried="true" value={agree} onChange={(e)=> setAgree(e.target.value)}/>

        <Button type="submit" disable={loading}
        ><span>Submit Button</span> </Button>

        {error && <p className="error">{error}</p>}
         
        <div className="info">Already have an account? <a href="login.html">Login</a> instead.</div>
      </Form>
    );
}