import React from "react";
import Store from "../../store";

const Presenter = () => (
    <Store.Consumer>
        {store => {
            return <div>HOME</div>;
        }}
    </Store.Consumer>
);

export default Presenter;
