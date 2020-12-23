import React from "react";
import CardAdd from "../card_add/cardAdd";
import CardEdit from "../card_edit/cardEdit";
import styles from "./maker.module.css";

const Maker = ({ cards, updateCard, uploader, deleteCard }) => {
  return (
    <div className={styles.maker}>
      {Object.keys(cards).map((key) => (
        <CardEdit
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          uploader={uploader}
          deleteCard={deleteCard}
        />
      ))}
      <CardAdd updateCard={updateCard} uploader={uploader} />
    </div>
  );
};

export default Maker;
