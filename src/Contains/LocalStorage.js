export const getLayoutFormLocalStorage = (page, key) => {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem(page)) || {};
        } catch (e) {
            /*Ignore*/
        }
    }
    return ls[key];
};

export const saveLayoutToLocalStorage = (page, key, value) => {
    if (global.localStorage) {
        global.localStorage.setItem(
            page,
            JSON.stringify({
                [key]: value
            })
        );
    }
};
