import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
<<<<<<< HEAD
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Main
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          Users
        </Link>
      </li>
    </ul>
  );
=======
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                    Main
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/login">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/users">
                    Users
                </Link>
            </li>
        </ul>
    );
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

export default NavBar;
