import IndexDashBoard from "./dashboard/IndexDashBoard";
import CreateGoods from "./goods/CreateGoods";
import EditGoods from "./goods/EditGoods";
import IndexGoods from "./goods/IndexGoods";
import IndexOrders from "./orders/IndexOrders";

const routes = [
    { path:'/dashBoard', component: IndexDashBoard, exact: true},

    { path:'/goods', component: IndexGoods, exact: true},
    { path:'/goods/create', component: CreateGoods, exact: true},
    { path:'/goods/edit/:id(\\d+)', component: EditGoods, exact: true},
    
    { path:'/orders', component: IndexOrders, exact: true}
]





export default routes;