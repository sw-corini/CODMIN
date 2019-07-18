import React, { Fragment } from "react";
import Store from "../../store";

const Presenter = () => (
    <Fragment>
        <Store.Consumer>
            {store => {
                return <Fragment>{store.test}</Fragment>;
            }}
        </Store.Consumer>
    </Fragment>
);

export default Presenter;
