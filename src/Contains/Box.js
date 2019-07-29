import React, { useEffect, memo } from "react";
import styled from "styled-components";

const TitleHeader = styled.div``;

const ThreeSectionList = styled.div``;

const GridBox = ({ title, data }) => {
    useEffect(() => {
        console.log("Box Rendered");
    });
    return (
        <>
            <TitleHeader>
                <span>{title}</span>
            </TitleHeader>
            <ThreeSectionList>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            </ThreeSectionList>
        </>
    );
};

export default GridBox;
