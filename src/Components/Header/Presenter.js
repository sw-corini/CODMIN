import React, { useEffect } from "react";
import styled from "styled-components";
import Store from "../../store";

const Presenter = () => {
    useEffect(() => {
        console.log("Header Rendered");
    });
    return (
        <Header>
            <Store.Consumer>
                {store => <span>{store.pageTitle}</span>}
            </Store.Consumer>
        </Header>
    );
};

const Header = styled.header`
    position: fixed;
    height: ${props => props.theme.headerHeight};
    top: 0;
    left: ${props => props.theme.menuBarWidth}
    right: 0;
    background-color: #fff;
    display:flex;
    align-items:center;
    padding:0 20px;

    span {
        color:rgba(0, 0, 0, 0.8);
        font-size:14px;
    }
`;

export default Presenter;
