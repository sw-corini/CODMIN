import React, { useState, useEffect } from "react";
import { getPageTitle } from "../../Contains/Routes";
import dataMap from "../../Contains/DataMap";
import Presenter from "./Presenter";

const Container = ({ id }) => {
    const pageId = id || getPageTitle;
    const [layoutData, setLayoutData] = useState([]);
    const testFetch = async () =>
        await fetch(process.env.REACT_APP_TEST_URL)
            .then(res => res.json())
            .catch(err => console.log(err));
    useEffect(() => {
        testFetch().then(res => {
            console.log("junckData Fetch Finished", res);
            setLayoutData([
                {
                    key: "1",
                    title: "Foreign Exchange",
                    dataName: "ForeignExchange"
                },
                {
                    key: "2",
                    title: "KOSPI",
                    dataName: "Kospi"
                }
            ]);
            console.log("updateData");
        });
    }, []);

    return <Presenter pageId={pageId} layoutData={layoutData} />;
};

export default Container;
