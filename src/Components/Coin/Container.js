import React, { Component } from "react";
import Presenter from "./Presenter";

class Container extends Component {
    state = {};
    render() {
        return <Presenter {...this.state} />;
    }
}

export default Container;
