import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Store from "../../store";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Presenter = () => (
    <Store.Consumer>
        {store => {
            const {
                layouts,
                onLayoutChange,
                cols,
                rowHeight,
                gridMargin,
                pageTitle
            } = store;
            return (
                <ResponsiveReactGridLayout
                    className="layout"
                    margin={gridMargin}
                    cols={cols}
                    rowHeight={rowHeight}
                    layouts={layouts}
                    onLayoutChange={(layout, layouts) => {
                        onLayoutChange(layout, layouts);
                    }}
                >
                    <div key="1">
                        <span className="text">1</span>
                    </div>
                    <div key="2">
                        <span className="text">1</span>
                    </div>
                    <div key="3">
                        <span className="text">1</span>
                    </div>
                    <div key="4">
                        <span className="text">1</span>
                    </div>
                    <div key="5">
                        <span className="text">1</span>
                    </div>
                </ResponsiveReactGridLayout>
            );
        }}
    </Store.Consumer>
);

export default Presenter;
