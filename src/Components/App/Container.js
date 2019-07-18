import React, { Component } from "react";
import Presenter from "./Presenter";
import Store from "../../store";

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: "text"
        };
    }

    render() {
        return (
            <Store.Provider value={this.state}>
                <Presenter />
            </Store.Provider>
        );
    }
}

export default Container;
