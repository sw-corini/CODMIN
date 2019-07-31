import React, { PureComponent } from "react";
import Presenter from "./Presenter";

class Container extends PureComponent {
    state = {
        layoutData: []
    };

    componentDidMount() {
        console.log("Home Container Rendered");
        this.setState({
            layoutData: [
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
                },
                {
                    key: "2",
                    title: "Foreign",
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
            ]
        });
    }

    render() {
        return (
            <Presenter
                layoutData={this.state.layoutData}
                {...this.state}
                {...this.props}
            />
        );
    }
}
export default Container;
