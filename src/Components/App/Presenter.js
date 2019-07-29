import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import Store from "../../store";

const Presenter = () => (
    <Store.Consumer>
        {store => {
            return (
                <>
                    <Menu />
                    <Header />
                </>
            );
        }}
    </Store.Consumer>
);

export default Presenter;
