import React, { memo } from "react";
import styles from "./print.module.css";

const Print = memo(({ card }) => {
  const { name, email, age, file } = card;
  return (
    <div className={styles.print}>
      <div className={styles.img_box}>
        <img src={file} alt="profile" className={styles.img} />
      </div>
      <div className={styles.text_box}>
        <p className={styles.text_name}>{name}</p>
        <p className={styles.age}>{age}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  );
});

export default Print;
