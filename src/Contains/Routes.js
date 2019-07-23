import Coin from "../Components/Coin";
import Home from "../Components/Home";

const Menu = [
    {
        id: "Home",
        name: "홈",
        link: "/",
        icon: "home",
        isLogin: false,
        component: Home
    },
    {
        id: "DashBoard",
        name: "대시보드",
        link: "/dashboard",
        icon: "chart-bar",
        isLogin: true,
        component: Coin
    }
];

export default Menu;
