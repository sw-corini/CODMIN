import React, { PureComponent } from "react";
import { ThemeProvider } from "styled-components";
import {
    getLayoutFormLocalStorage,
    saveLayoutToLocalStorage
} from "../../Contains/LocalStorage";
import Presenter from "./Presenter";
import Store from "../../store";
import theme from "../../Contains/Theme";

class Container extends PureComponent {
    constructor(props) {
        super(props);

        this._setPageTitle = pageTitle => {
            this.setState({
                pageTitle
            });
        };

        // 레이아웃 초기화
        this._resetLayout = () => {
            this.setState({ layouts: {} });
        };

        // 레이아웃 변경시 로컬스토리지에 저장
        this._onLayoutChange = (layout, layouts) => {
            saveLayoutToLocalStorage(this.pageTitle, "layouts", layouts);
            this.setState({ layouts });
        };

        this.originalLayouts =
            getLayoutFormLocalStorage(this.pageTitle, "layouts") || {};

        this.state = {
            pageTitle: "CODEMIN",
            setPageTitle: this._setPageTitle,
            gridMargin:[20,20],
            rowHeight: 30,
            cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
            layouts: JSON.parse(JSON.stringify(this.originalLayouts)),
            onLayoutChange: this._onLayoutChange,
            resetLayout: this._resetLayout
        };
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Store.Provider value={this.state}>
                    <Presenter />
                </Store.Provider>
            </ThemeProvider>
        );
    }
}

export default Container;
