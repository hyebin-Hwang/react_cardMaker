import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Auth from "./services/auth_service";
import Uploader from "./services/uploader";
import Realtime from "./services/realtime";

const authService = new Auth();
const uploader = new Uploader();
const realtime = new Realtime();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} uploader={uploader} realtime={realtime} />
  </React.StrictMode>,
  document.getElementById("root")
);
