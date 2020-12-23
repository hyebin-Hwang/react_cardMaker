import React, { memo, useRef, useState } from "react";
import styles from "./cardAdd.module.css";

const CardAdd = memo(({ updateCard, uploader }) => {
  const fileRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const formRef = useRef();
  const [file, setFile] = useState({ fileURL: null });
  const [isLoading, setIsLoading] = useState(false);
  const onChangeFile = async (e) => {
    setIsLoading(true);
    const fileUpload = await uploader.upload(e.target.files[0]);
    setFile({ fileURL: fileUpload.url });
    setIsLoading(false);
  };
  const clickImg = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };
  const clickAdd = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      file: file.fileURL,
    };
    formRef.current.reset();
    updateCard(card);
  };
  return (
    <div className={styles.cardEdit}>
      <form ref={formRef}>
        <div className={styles.container}>
          <input
            type="text"
            className={styles.text_name}
            placeholder="name"
            ref={nameRef}
          />
          <input type="text" name="email" placeholder="email" ref={emailRef} />
          <input type="text" name="age" placeholder="age" ref={ageRef} />
          <input
            style={{ display: "none" }}
            type="file"
            ref={fileRef}
            onChange={onChangeFile}
          />
          {!isLoading && (
            <button onClick={clickImg} className={styles.btn}>
              이미지
            </button>
          )}
          {isLoading && <div className={styles.loading}></div>}
          <button onClick={clickAdd} className={styles.btn}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
});

export default CardAdd;
