import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Maker from "../maker/maker";
import Preview from "../preview/preview";
import styles from "./main.module.css";

const Main = ({ authService, uploader, realtime }) => {
  const history = useHistory();
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);
  const updateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    realtime.saveData(userId, card);
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    realtime.removeDate(userId, card);
  };
  useEffect(() => {
    authService.authChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, history]);
  useEffect(() => {
    if (userId) {
      const stopSync = realtime.syncCard(userId, (cards) => {
        setCards(cards);
      });
      return () => stopSync();
    } else {
      return;
    }
  }, [userId, realtime]);
  return (
    <main>
      <Header onLogout={onLogout} />
      <div className={styles.main}>
        <Maker
          cards={cards}
          updateCard={updateCard}
          uploader={uploader}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </main>
  );
};

export default Main;
