import React, { Component } from "react";
import Presenter from "./Presenter";

class Container extends Component {
    componentDidMount() {
        console.log("Home Container Rendered");
    }

    render() {
        return <Presenter {...this.state} {...this.props} />;
    }
}
export default Container;
