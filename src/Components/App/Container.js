import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Presenter from "./Presenter";
import Store from "../../store";
import theme from "../../Contains/Theme";
import { getPageInfo } from "../../Contains/Routes";

class Container extends Component {
    constructor(props) {
        super(props);

        const pageInfo = getPageInfo();

        this.state = {
            testState: "test",
            pageTitle: pageInfo.title
        };
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
