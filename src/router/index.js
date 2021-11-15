import Vue from "vue";
import VueRouter from "vue-router";
import GoodsView from "../views/GoodsView.vue";
import ShoppingCart from "../views/ShoppingCartView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/goods", name: "goods", component: GoodsView, alias: ["/"] },
  { path: "/cart", name: "shopping-cart", component: ShoppingCart },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
