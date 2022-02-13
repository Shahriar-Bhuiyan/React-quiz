import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function PublicRoute({ component: Components, ...rest }) {
  const { currentUser } = useAuth();
  return !currentUser ? (
    <Route {...rest}>{(props) => <Components {...props} />}</Route>
  ) : (
    <Redirect to="/" />
  );
}
