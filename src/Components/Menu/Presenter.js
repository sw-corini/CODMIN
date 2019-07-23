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
import logo from "../../assets/images/smile.svg"

const printListItem = item => {
    const { id, subMenu, link, name, icon } = item;
    return (
        <li key={id}>
        <NavLink
            exact={id === "Home" ? true : false}
            activeClassName="active"
            to={link}
        >
            <FontAwesomeIcon icon={icon} />
            {name}
        </NavLink>
        </li>
    )
}
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
                            <img src={logo} /><span>CODMIN</span>
                        </Title>
                        <ul>{Menu.map(printListItem)}</ul>
                    </MenuNavigation>
                    <Container>{Menu.map(printRouteItem)}</Container>
                </Router>
            );
        }}
    </Store.Consumer>
);

const Container = styled.div`
    position: fixed;
    overflow-y: auto;
    top: ${props => props.theme.headerHeight};
    left: ${props => props.theme.menuBarWidth};
    bottom: 0;
    right: 0;
`;

const Title = styled.h1`
    padding:0 20px;
    background-color:rgba(0,0,0,0.3);

    color: #fff;
    display: flex;
    height: ${props => props.theme.headerHeight};
    font-weight: bold;
    align-items:center;

    img {
        margin-right:10px;
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
        a {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            display: block;
            line-height: 40px;
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
