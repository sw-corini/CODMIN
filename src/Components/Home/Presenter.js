import React, { useEffect } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import gridLayout, {
    getLayoutFormLocalStorage,
    saveLayoutToLocalStorage
} from "../../Contains/GridLayout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Presenter = ({ pageId }) => {
    useEffect(() => {
        console.log("Home Presenter Rendered");
    });
    const layouts = getLayoutFormLocalStorage(pageId) || {};
    const { gridMargin, rowHeight, cols } = gridLayout;
    const onLayoutChange = (_, layouts) => {
        saveLayoutToLocalStorage(pageId, layouts);
    };
    return (
        <ResponsiveReactGridLayout
            className="layout"
            margin={gridMargin}
            cols={cols}
            rowHeight={rowHeight}
            layouts={layouts}
            onLayoutChange={onLayoutChange}
        >
            {Array(30)
                .fill(1)
                .map((_, index) => (
                    <div key={index}>test{index}</div>
                ))}
        </ResponsiveReactGridLayout>
    );
};

export default Presenter;
