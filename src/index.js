import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createGlobalStyle } from "styled-components";
import "./assets/css/react-grid-layout.css";
import "./assets/css/react-resizable.css";
import reset from "styled-reset";

const Global = createGlobalStyle`
${reset};
`;
ReactDOM.render(
    <Fragment>
        <App />
        <Global />
    </Fragment>,
    document.getElementById("root")
);
