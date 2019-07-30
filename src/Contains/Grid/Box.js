import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThreeSectionItem from "./ThreeSectionItem";

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
                        <ThreeSectionItem
                            item={item}
                            key={index}
                            itemKey={index}
                        />
                    ))}
                </ul>
            </ThreeSectionList>
        </>
    );
};

export default GridBox;
