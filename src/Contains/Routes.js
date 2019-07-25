import Coin from "../Components/Coin";
import Coin2 from "../Components/Coin2";
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
    },
    {
        id: "DashBoard2",
        name: "Dashboard2",
        link: "/dashboard2",
        icon: "chart-line",
        isLogin: true,
        component: Coin2
    }
];

export default Menu;
