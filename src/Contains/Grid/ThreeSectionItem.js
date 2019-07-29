import React, { useEffect, memo } from "react";

const ThreeSectionItem = ({ item, itemKey }) => {
    useEffect(() => {
        console.log("Item Rendered");
    });
    return (
        <li key={itemKey}>
            {item.title} {item.price} {item.variance}
        </li>
    );
};

export default memo(ThreeSectionItem);
