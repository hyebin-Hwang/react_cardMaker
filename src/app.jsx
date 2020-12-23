import React from "react";
import Login from "./component/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./component/main/main";
import styles from "./app.module.css";

function App({ authService, uploader, realtime }) {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/main">
            <Main
              authService={authService}
              uploader={uploader}
              realtime={realtime}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
