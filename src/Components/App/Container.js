import React, { PureComponent } from "react";
import Presenter from "./Presenter";
import { getFromLS, saveToLS } from "../../Contains/LocalStorage";
import Store from "../../store";

const originalLayouts = getFromLS("layouts") || {};

class Container extends PureComponent {
    constructor(props) {
        super(props);

        // ���̾ƿ� �ʱ�ȭ
        this._resetLayout = () => {
            this.setState({ layouts: {} });
        };

        // ���̾ƿ� ����� ���ý��丮���� ����
        this._onLayoutChange = (layout, layouts) => {
            saveToLS("layouts", layouts);
            this.setState({ layouts });
        };

        this.state = {
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

if (require.main === module) {
    require("../../hook.jsx")(module.exports);
}
