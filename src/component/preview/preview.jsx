import React from "react";
import Print from "../print/print";
import styles from "./preview.module.css";

const Preview = ({ cards }) => {
  return (
    <div className={styles.preview}>
      {Object.keys(cards).map((key) => (
        <Print key={key} card={cards[key]} />
      ))}
    </div>
  );
};

export default Preview;
