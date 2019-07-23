import React from "react";
import Store from "../../store";

const Presenter = () => (
    <Store.Consumer>
        {store => {
            return <div>Login</div>;
        }}
    </Store.Consumer>
);

export default Presenter;
