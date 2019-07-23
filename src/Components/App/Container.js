import React, { PureComponent } from "react";
import Presenter from "./Presenter";
import Store from "../../store";

class Container extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
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
