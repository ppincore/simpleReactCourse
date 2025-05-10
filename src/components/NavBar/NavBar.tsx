import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss'
const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/about" className={styles.navlinks}>About</NavLink>
      <NavLink to="/posts" className={styles.navlinks}>Posts</NavLink>
    </div>
  );
};

export default NavBar;
