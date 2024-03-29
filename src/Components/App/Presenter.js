import React from "react";
import Header from "../Header";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu, { siteName } from "../../Contains/Routes";
import logo from "../../assets/images/smile.svg";

const printListItem = item => {
    const { id, link, title, icon } = item;
    return (
        <li key={id}>
            <NavLink
                exact={id === "Home" ? true : false}
                activeClassName="active"
                to={link}
            >
                <FontAwesomeIcon icon={icon} />
                {title}
            </NavLink>
        </li>
    );
};
const printRouteItem = item => (
    <Route
        key={item.id}
        path={item.link}
        exact
        render={props => {
            return <item.component id={item.id} title={item.title} />;
        }}
    />
);

const Presenter = () => (
    <>
        <Router>
            <MenuNavigation>
                <Title>
                    <img src={logo} alt="CODMIN" />
                    <span>{siteName}</span>
                </Title>
                <ul>{Menu.map(printListItem)}</ul>
            </MenuNavigation>
            <Container>{Menu.map(printRouteItem)}</Container>
        </Router>
        <Header />
    </>
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
    padding: 0 20px;
    background-color: rgba(0, 0, 0, 0.3);

    color: #fff;
    display: flex;
    height: ${props => props.theme.headerHeight};
    font-weight: bold;
    align-items: center;

    img {
        margin-right: 10px;
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
