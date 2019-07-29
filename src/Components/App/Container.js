import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Presenter from "./Presenter";
import Store from "../../store";
import theme from "../../Contains/Theme";

class Container extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("App Container Rendered");
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Store.Provider value={this.state}>
                    <Presenter />
                </Store.Provider>
            </ThemeProvider>
        );
    }
}

export default Container;
