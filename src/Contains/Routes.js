import Coin from "../Components/Coin";
import Home from "../Components/Home";

const Menu = [
    {
        id: "Home",
        name: "Home",
        link: "/",
        icon: "columns",
        isLogin: false,
        component: Home,
        title: "Home",
        type: "DashboardLayout"
    },
    {
        id: "DashBoard",
        name: "Dashboard",
        link: "/dashboard",
        icon: "chart-line",
        isLogin: true,
        component: Coin,
        title: "CoinDashboard",
        type: "DashboardLayout"
    }
];

export const getPageInfo = () => {
    const pathName = window.location.pathname;
    const thisRoute = Menu.filter(item => item.link === pathName);
    return thisRoute[0] || {};
};

export default Menu;
