import Vue from "vue";
import VueRouter from "vue-router";
import GoodsView from "../views/GoodsView.vue";
import ShoppingCart from "../views/ShoppingCartView.vue";
import FavoritesView from "../views/FavoritesView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/goods", name: "goods", component: GoodsView, alias: ["/"] },
  { path: "/cart", name: "shopping-cart", component: ShoppingCart },
  { path: "/favs", name: "favorites", component: FavoritesView }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
