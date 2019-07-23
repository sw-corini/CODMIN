import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "../../Contains/Routes";
import Store from "../../store";

const printListItem = item => (
    <li key={item.id}>
        <Link to={item.link}>
            <FontAwesomeIcon icon={item.icon} />
            {item.name}
        </Link>
    </li>
);

const printRouteItem = item => (
    <Route key={item.id} path={item.link} exact component={item.component} />
);

const Presenter = () => (
    <Store.Consumer>
        {store => {
            return (
                <Router>
                    <MenuNavigation>
                        <ul>{Menu.map(printListItem)}</ul>
                    </MenuNavigation>
                    {Menu.map(printRouteItem)}
                </Router>
            );
        }}
    </Store.Consumer>
);

const MenuNavigation = styled.nav`
    width: 200px;
    background-color: ${props => props.theme.mainColor};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
`;

export default Presenter;
