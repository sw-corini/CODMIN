import React, { PureComponent } from "react";
import { ThemeProvider } from "styled-components";
import Presenter from "./Presenter";
import Store from "../../store";
import theme from "../../Contains/Theme";

class Container extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
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
