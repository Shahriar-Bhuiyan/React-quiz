import Account from "./Account";
import Classes from "../styles/Nav.module.css";
import Logo from "../assests/images/logo-bg.png"
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={Classes.nav}>
      <ul>
        <li>
          <Link to="/" className={Classes.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
