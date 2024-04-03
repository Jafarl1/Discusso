import React from "react";

import Navbar from "../navbar/Navbar";
import logo from "../../assets/icons/discusso-logo.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
          <h1>Discusso</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
