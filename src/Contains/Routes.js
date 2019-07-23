import Coin from "../Components/Coin";
import Home from "../Components/Home";

const Menu = [
    {
        id: "Home",
        name: "Home",
        link: "/",
        icon: "columns",
        isLogin: false,
        component: Home
    },
    {
        id: "DashBoard",
        name: "Dashboard",
        link: "/dashboard",
        icon: "chart-line",
        isLogin: true,
        component: Coin
    }
];

export default Menu;
