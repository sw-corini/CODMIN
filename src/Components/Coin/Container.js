import React, { Component } from "react";
import Presenter from "./Presenter";

class Container extends Component {
    componentDidMount() {}
    render() {
        return <Presenter {...this.state} {...this.props} />;
    }
}
export default Container;
