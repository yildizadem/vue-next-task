import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Detail from "./pages/Detail.vue";
const history = createWebHistory();
const routes = [
    { path: "/", component: Home },
    { path: "/detail/:id", component: Detail },
];
const router = createRouter({ history, routes });
export default router;