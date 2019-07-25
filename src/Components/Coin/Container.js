import React, { Component } from "react";
import Presenter from "./Presenter";
import Store from "../../store";
import { getLayoutFormLocalStorage } from "../../Contains/LocalStorage";

class Container extends Component {
    static contextType = Store;

    componentWillMount() {
        const store = this.context;
        store.setPageTitle("Coin Dashboard");
        store.setLayoutPageLoaded("Coin Dashboard");
    }

    componentDidMount() {}
    render() {
        return <Presenter {...this.state} {...this.props} />;
    }
}
export default Container;
