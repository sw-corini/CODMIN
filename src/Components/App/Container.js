import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Presenter from "./Presenter";
import theme from "../../Contains/Theme";

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        console.log("App Container Rendered");
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Presenter />
            </ThemeProvider>
        );
    }
}

export default Container;
