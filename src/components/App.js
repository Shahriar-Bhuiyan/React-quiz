import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {AuthProivder} from "../context/AuthContext" 
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SignUp from "./pages/SingUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
function App() {
  return (
    <Router>
      <AuthProivder> 
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute path="/signup" component={SignUp} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/quiz/:id" component={Quiz} />
            <PrivateRoute path="/result/:id" component={Result} />
          </Switch>
        </Layout>
      </AuthProivder> 
    </Router>
  );
}

export default App;
