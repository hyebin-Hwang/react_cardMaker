import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onLogout }) => {
  console.log("header");
  return (
    <header className={styles.header}>
      {onLogout && (
        <button
          className={styles.logout_btn}
          onClick={onLogout}
          style={{ cursor: "pointer" }}
        >
          Logout
        </button>
      )}
      <h1>header</h1>
    </header>
  );
});

export default Header;
