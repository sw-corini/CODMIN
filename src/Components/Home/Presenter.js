import React, { useEffect } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Store from "../../store";
import Grid, {
    getLayoutFormLocalStorage,
    saveLayoutToLocalStorage
} from "../../Contains/GridLayout";
import GridBox from "../../Contains/Grid/Box";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const layoutData = [
    {
        key: "1",
        title: "Foreign Exchange",
        data: [
            {
                title: "KRW/USD",
                price: 1184.2,
                variance: 0.0
            },
            {
                title: "KRW/JPY",
                price: 1090.35,
                variance: 0.3
            },
            {
                title: "KRW/EUR",
                price: 1318.64,
                variance: 0.05
            },
            {
                title: "KRW/CNY",
                price: 172.21,
                variance: 0.03
            },
            {
                title: "JYP/USD",
                price: 108.67,
                variance: 0.02
            },
            {
                title: "USD/EUR",
                price: 1.1147,
                variance: 0.0021
            },
            {
                title: "USD/INDEX",
                price: 97.75,
                variance: 0.2
            }
        ]
    }
];

const Presenter = ({ pageInfo }) => {
    useEffect(() => {
        console.log("Home Presenter");
    });

    return (
        <Store.Consumer>
            {store => {
                const { pageTitle } = store;
                console.log(`pageTitle : ${pageTitle}`);
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
            }}
        </Store.Consumer>
    );
};
export default Presenter;
