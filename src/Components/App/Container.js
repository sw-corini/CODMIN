import React, { PureComponent } from "react";
import Presenter from "./Presenter";
import { getFromLS, saveToLS } from "../../Contains/LocalStorage";
import Store from "../../store";

const originalLayouts = getFromLS("layouts") || {};

class Container extends PureComponent {
    constructor(props) {
        super(props);

        // 레이아웃 초기화
        this._resetLayout = () => {
            this.setState({ layouts: {} });
        };

        // 레이아웃 변경시 로컬스토리지에 저장
        this._onLayoutChange = (layout, layouts) => {
            saveToLS("layouts", layouts);
            this.setState({ layouts });
        };

        this.state = {
            rowHeight: 30,
            cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
            layouts: JSON.parse(JSON.stringify(originalLayouts)),
            onLayoutChange: this._onLayoutChange,
            resetLayout: this._resetLayout
        };
    }

    render() {
        return (
            <Store.Provider value={this.state}>
                <Presenter />
            </Store.Provider>
        );
    }
}

export default Container;
