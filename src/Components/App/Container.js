import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import {
    getLayoutFormLocalStorage,
    saveLayoutToLocalStorage
} from "../../Contains/LocalStorage";
import Presenter from "./Presenter";
import Store from "../../store";
import { getPageInfo } from "../../Contains/Routes";
import theme from "../../Contains/Theme";

class Container extends Component {
    constructor(props) {
        super(props);

        // 레이아웃 초기화
        this._resetLayout = () => {
            this.setState(currentState => {
                return {
                    ...currentState,
                    setGridLayout: {
                        ...currentState.setGridLayout,
                        layouts: {}
                    }
                };
            });
        };

        // 레이아웃 변경시 로컬스토리지에 저장
        this._onLayoutChange = (layout, layouts) => {
            const {
                pageInfo: { pageTitle }
            } = this.state;
            saveLayoutToLocalStorage(pageTitle, "layouts", layouts);
            this.setState(currentState => {
                return {
                    ...currentState,
                    setGridLayout: {
                        ...currentState.setGridLayout,
                        layouts
                    }
                };
            });
        };

        this._setPageTitle = pageTitle => {
            this.setState(currentState => {
                return {
                    ...currentState,
                    pageInfo: {
                        ...currentState.pageInfo,
                        pageTitle
                    }
                };
            });
            window.document.title = pageTitle;
        };

        this._setLayoutPageLoaded = pageTitle => {
            const layouts =
                getLayoutFormLocalStorage(pageTitle, "layouts") || {};
            this.setState(currentState => {
                return {
                    ...currentState,
                    setGridLayout: {
                        ...currentState.setGridLayout,
                        layouts
                    }
                };
            });
        };

        const page = getPageInfo();
        const pageTitle = page.title;
        const layouts = getLayoutFormLocalStorage(pageTitle, "layouts") || {};

        this.state = {
            setGridLayout: {
                layouts: layouts || {},
                gridMargin: [20, 20],
                rowHeight: 30,
                cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
                onLayoutChange: this._onLayoutChange,
                resetLayout: this._resetLayout,
                setLayoutPageLoaded: this._setLayoutPageLoaded
            },
            pageInfo: {
                pageTitle: pageTitle,
                setPageTitle: this._setPageTitle
            }
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
