import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "../../Contains/Routes";
import Store from "../../store";

const printListItem = item => (
    <li key={item.id}>
        <NavLink
            exact={item.id === "Home" ? true : false}
            activeClassName="active"
            to={item.link}
        >
            <FontAwesomeIcon icon={item.icon} />
            {item.name}
        </NavLink>
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
                        <Title>
                            <Link to="/">CODMIN</Link>
                        </Title>
                        <ul>{Menu.map(printListItem)}</ul>
                    </MenuNavigation>
                    {Menu.map(printRouteItem)}
                </Router>
            );
        }}
    </Store.Consumer>
);

const Title = styled.h1`
    a {
        color: #fff;
        display: block;
        text-align: center;
        line-height: ${props => props.theme.headerHeight};
        font-weight: bold;
    }
`;

const MenuNavigation = styled.nav`
    width: ${props => props.theme.menuBarWidth};
    background-color: ${props => props.theme.mainColor};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;

    li {
        &:first-child {
            border-top: 1px rgba(255, 255, 255, 0.2) solid;
        }

        border-bottom: 1px rgba(255, 255, 255, 0.2) solid;

        a {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            display: block;
            line-height: 30px;
            padding: 5px 20px;
            font-weight: 300;

            i,
            svg {
                margin-right: 10px;
            }

            &:hover {
                color: rgba(255, 255, 255, 0.9);
            }

            &.active {
                background-color: ${props => props.theme.pointColor};
                color: #fff;
                font-weight: bold;
            }
        }
    }
`;

export default Presenter;
