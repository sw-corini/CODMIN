import React from "react";
import styled from "styled-components";
import Store from "../../store";

const Presenter = () => (
    <Store.Consumer>
        {store => {
            return <div>test</div>;
        }}
    </Store.Consumer>
);

export default Presenter;
