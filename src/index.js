import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createGlobalStyle } from "styled-components";
import "./assets/css/common.css";
import "./Contains/FontAwesome";
import reset from "styled-reset";

const Global = createGlobalStyle`
    ${reset};
`;

ReactDOM.render(
    <>
        <App />
        <Global />
    </>,
    document.getElementById("root")
);
