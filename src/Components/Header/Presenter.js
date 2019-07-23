import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Store from "../../store";

const Presenter = () => (
    <Header>
        <Store.Consumer>{store => {}}</Store.Consumer>
    </Header>
);

const Header = styled.header`
    position: fixed;
    height: ${props => props.theme.headerHeight};
    top: 0;
    left: ${props => props.theme.menuBarWidth}
    right: 0;
    background-color: ${props => props.theme.subColor};
`;

export default Presenter;
