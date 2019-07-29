import React, { Component } from "react";
import Presenter from "./Presenter";
import Store from "../../store";

class Container extends Component {
    static contextType = Store;

    componentDidMount() {}
    render() {
        return <Presenter {...this.state} {...this.props} />;
    }
}
export default Container;
