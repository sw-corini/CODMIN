import React from "react";
import Store from "../../store";
import { WidthProvider, Responsive } from "react-grid-layout";
import { GridBox } from "../../Contains/GridBox";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const block = (item, key) => {
    return (
        <div key={key}>
            <span className="text">1</span>
        </div>
    );
};

const Presenter = () => (
    <GridBox>
        <Store.Consumer>
            {store => {
                const { layouts, onLayoutChange } = store;
                return (
                    <ResponsiveReactGridLayout
                        className="layout"
                        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                        rowHeight={30}
                        layouts={layouts}
                        onLayoutChange={(layout, layouts) =>
                            onLayoutChange(layout, layouts)
                        }
                    >
                        <div
                            key="1"
                            data-grid={{
                                w: 2,
                                h: 3,
                                x: 0,
                                y: 0,
                                minW: 2,
                                minH: 3
                            }}
                        >
                            <span className="text">1</span>
                        </div>
                        <div
                            key="2"
                            data-grid={{
                                w: 2,
                                h: 3,
                                x: 2,
                                y: 0,
                                minW: 2,
                                minH: 3
                            }}
                        >
                            <span className="text">2</span>
                        </div>
                        <div
                            key="3"
                            data-grid={{
                                w: 2,
                                h: 3,
                                x: 4,
                                y: 0,
                                minW: 2,
                                minH: 3
                            }}
                        >
                            <span className="text">3</span>
                        </div>
                        <div
                            key="4"
                            data-grid={{
                                w: 2,
                                h: 3,
                                x: 6,
                                y: 0,
                                minW: 2,
                                minH: 3
                            }}
                        >
                            <span className="text">4</span>
                        </div>
                        <div
                            key="5"
                            data-grid={{
                                w: 2,
                                h: 3,
                                x: 8,
                                y: 0,
                                minW: 2,
                                minH: 3
                            }}
                        >
                            <span className="text">5</span>
                        </div>
                    </ResponsiveReactGridLayout>
                );
            }}
        </Store.Consumer>
    </GridBox>
);

export default Presenter;
