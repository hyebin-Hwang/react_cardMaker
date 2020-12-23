import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => {
  console.log("footer");
  return (
    <footer className={styles.footer}>
      <h1>Footer</h1>
    </footer>
  );
});

export default Footer;
