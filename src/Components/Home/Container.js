import React, { Component } from "react";
import { getPageTitle } from "../../Contains/Routes";
import Presenter from "./Presenter";

const Container = ({ id, title }) => {
    const pageId = id || getPageTitle;

    return <Presenter pageId={pageId} />;
};

export default Container;
