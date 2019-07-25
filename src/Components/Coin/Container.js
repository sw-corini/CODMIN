import React, { Component } from "react";
import Presenter from "./Presenter";
import Store from "../../store";
import { getPageInfo } from "../../Contains/Routes";

class Container extends Component {
    static contextType = Store;

    componentDidMount() {
        const store = this.context;
        const title = this.props.title || getPageInfo().title;
        const {
            setGridLayout: { setLayoutPageLoaded },
            pageInfo: { setPageTitle }
        } = store;
        setPageTitle(title);
        setLayoutPageLoaded(title);
    }
    render() {
        return <Presenter {...this.state} {...this.props} />;
    }
}
export default Container;
