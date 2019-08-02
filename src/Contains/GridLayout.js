export const getLayoutFormLocalStorage = page => {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem(page)) || {};
        } catch (e) {
            /*Ignore*/
        }
    }
    return ls["layouts"];
};

export const saveLayoutToLocalStorage = (page, value) => {
    if (global.localStorage) {
        global.localStorage.setItem(
            page,
            JSON.stringify({
                layouts: value
            })
        );
    }
};

export default {
    gridMargin: [20, 20],
    rowHeight: 30,
    cols: { lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }
};
