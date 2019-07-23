import React from "react";
import Store from "../../store";
import { WidthProvider, Responsive } from "react-grid-layout";
import { GridList } from "../../Contains/GridList";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Presenter = () => (
    <GridList>
        <Store.Consumer>
            {store => {
                const { layouts, onLayoutChange, cols, rowHeight } = store;
                return (
                    <ResponsiveReactGridLayout
                        className="layout"
                        cols={cols}
                        rowHeight={rowHeight}
                        layouts={layouts}
                        onLayoutChange={(layout, layouts) =>
                            onLayoutChange(layout, layouts)
                        }
                    >
                        <div key="1">
                            <span className="text">1</span>
                        </div>
                    </ResponsiveReactGridLayout>
                );
            }}
        </Store.Consumer>
    </GridList>
);

export default Presenter;
