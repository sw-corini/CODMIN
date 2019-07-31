import React, { useEffect } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Grid, {
    getLayoutFormLocalStorage,
    saveLayoutToLocalStorage
} from "../../Contains/GridLayout";
import GridBox from "../../Contains/Grid/Box";
import { getPageInfo } from "../../Contains/Routes";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Presenter = ({ layoutData }) => {
    useEffect(() => {
        console.log("Home Presenter");
    });
    const pageInfo = getPageInfo();
    const pageTitle = pageInfo.title;
    const layouts = getLayoutFormLocalStorage(pageTitle) || {};
    const { cols, rowHeight, gridMargin } = Grid;

    return (
        <ResponsiveReactGridLayout
            className="layout"
            margin={gridMargin}
            cols={cols}
            rowHeight={rowHeight}
            layouts={layouts}
            onLayoutChange={(layout, layouts) => {
                saveLayoutToLocalStorage(pageTitle, layouts);
            }}
        >
            {layoutData.map(item => (
                <div key={item.key}>
                    <GridBox title={item.title} data={item.data} />
                </div>
            ))}
        </ResponsiveReactGridLayout>
    );
};
export default Presenter;
