import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import gridLayout, {
    getLayoutFormLocalStorage,
    saveLayoutToLocalStorage
} from "../../Contains/GridLayout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Presenter = ({ pageId }) => {
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
            <div key="1">test</div>
        </ResponsiveReactGridLayout>
    );
};

export default Presenter;
