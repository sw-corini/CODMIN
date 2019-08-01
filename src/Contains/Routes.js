import Home from "../Components/Home";
import Login from "../Components/Login";

export const siteName = "CODMIN";

const Menu = [
    {
        id: "Login",
        link: "/login",
        icon: "user",
        isLogin: false,
        component: Login,
        title: "Login",
        type: "page"
    },
    {
        id: "Home",
        link: "/",
        icon: "columns",
        isLogin: true,
        component: Home,
        title: "Home",
        type: "DashboardLayout"
    }
];
export const getPageInfo = () => {
    const pathName = window.location.pathname;
    const thisRoute = Menu.filter(item => item.link === pathName);
    return thisRoute[0] || {};
};

export default Menu;
