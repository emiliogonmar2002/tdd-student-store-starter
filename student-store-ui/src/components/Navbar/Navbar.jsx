import * as React from "react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="buttonContainer">
        <p>
          <HashLink className="navbutton" smooth to="/#home">
            Home
          </HashLink>
        </p>
        <p>
          <HashLink className="navbutton" smooth to="/#about">
            About
          </HashLink>
        </p>
        <p>
          <HashLink className="navbutton" smooth to="/#contact">
            Contact
          </HashLink>
        </p>
        <p>
          <HashLink className="navbutton" smooth to="/orders">
            Orders
          </HashLink>
        </p>
      </div>
    </nav>
  );
}
