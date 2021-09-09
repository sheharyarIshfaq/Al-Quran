import React from "react";
import classes from "./Navbar.module.css";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <img src={logo} alt="AL QURAN" />
        </div>
        <div className={classes.buttons}>
          <button>Contact Us</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
