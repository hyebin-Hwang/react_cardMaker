import { firebaseData } from "./firebase";

class Realtime {
  saveData(userId, card) {
    firebaseData.ref(`${userId}/card/${card.id}`).set(card);
  }
  removeDate(userId, card) {
    firebaseData.ref(`${userId}/card/${card.id}`).remove();
  }
  syncCard(userId, onUpdate) {
    const ref = firebaseData.ref(`${userId}/card`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
}

export default Realtime;
