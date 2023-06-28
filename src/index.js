import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import css from "./styles.css"

const rootId = document.getElementById("root");

//route path => tells us where we want it to go; element - what do we render? {jsx}

ReactDOM.render(
  <React.StrictMode>
        {<App/>}
   </React.StrictMode>,
  rootId
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootId
    );
  });
}