import React, { memo, useRef } from "react";
import styles from "./cardEdit.module.css";

const CardEdit = memo(({ card, updateCard, uploader, deleteCard }) => {
  const fileRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const onChangeFile = async (e) => {
    const uploaded = await uploader.upload(e.target.files[0]);
    updateCard({
      ...card,
      file: uploaded.url,
    });
  };
  const clickImg = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };
  const inputChange = (e) => {
    card[e.currentTarget.name] = e.currentTarget.value;
    updateCard(card);
  };
  const clickDelete = (e) => {
    e.preventDefault();
    deleteCard(card);
  };
  return (
    <div className={styles.cardEdit}>
      <form>
        <div className={styles.container}>
          <input
            type="text"
            value={card.name}
            ref={nameRef}
            name="name"
            className={styles.text_name}
            onChange={inputChange}
          />
          <input
            onChange={inputChange}
            type="text"
            name="email"
            value={card.email}
            ref={emailRef}
          />
          <input
            onChange={inputChange}
            type="text"
            name="age"
            value={card.age}
            ref={ageRef}
          />
          <input
            style={{ display: "none" }}
            type="file"
            ref={fileRef}
            onChange={onChangeFile}
          />
          <button onClick={clickImg} className={styles.btn}>
            이미지
          </button>
          <button onClick={clickDelete} className={styles.btn}>
            삭제
          </button>
        </div>
      </form>
    </div>
  );
});
export default CardEdit;
