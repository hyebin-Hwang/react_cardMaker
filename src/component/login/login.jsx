import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMain = (userId) => {
    history.push({ pathname: "/main", state: { id: userId } });
  };
  const handleLogin = () => {
    authService
      .login()
      .then((user) => goToMain(user.user.uid))
      .catch(() => alert("로그인이 필요함!"));
  };
  useEffect(() => {
    authService.authChange((user) => user && goToMain(user));
  });
  return (
    <div className={styles.login}>
      <Header />
      <div className={styles.login_box}>
        <h2>Login</h2>
        <button onClick={handleLogin} className={styles.btn}>
          Google
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
