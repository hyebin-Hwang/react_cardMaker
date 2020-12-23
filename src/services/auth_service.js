import { firebaseAuth, provider } from "./firebase";

class Auth {
  login() {
    return firebaseAuth.signInWithPopup(provider);
  }
  logout() {
    firebaseAuth.signOut();
  }
  authChange(user) {
    return firebaseAuth.onAuthStateChanged(user);
  }
}
export default Auth;
