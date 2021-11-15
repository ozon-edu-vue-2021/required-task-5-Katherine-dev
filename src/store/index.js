import Vue from "vue";
import Vuex from "vuex";
import getImages from "../utils/getImages";

Vue.use(Vuex);

const images = getImages(
  require.context("../assets/images", false, /\.(webp)$/)
);
export default new Vuex.Store({
  state: () => ({
    goods: [],
    goodsInCart: [],
  }),
  mutations: {
    setGoods(state, payload) {
      state.goods = payload;
    },
    addGoodToCart(state, payload) {
      const goodWithCount = { ...payload, count: 1 };
      let added = false;
      if (state.goodsInCart.length === 0) {
        state.goodsInCart.push(goodWithCount);
        added = true;
      } else {
        state.goodsInCart.forEach((good) => {
          if (good.id === goodWithCount.id) {
            good.count++;
            added = true;
          }
        });
      }
      if (!added) {
        state.goodsInCart.push(goodWithCount);
        added = true;
      }
    },
    removeFromCart(state, goodId) {
      state.goodsInCart = state.goodsInCart.filter((it) => it.id !== goodId);
    },
  },
  actions: {
    async fetchGoods(context) {
      try {
        const response = await fetch(
          "https://random-data-api.com/api/food/random_food?size=30"
        );
        const goods = await response.json();
        const modifiedGoods = goods.map((good) => ({
          id: good.id,
          title: good.dish,
          cost: Math.floor(Math.random() * 1000) + 1,
          image: images[Math.round(Math.random() * (images.length - 1))],
        }));

        if (goods.length) {
          context.commit("setGoods", modifiedGoods);
        }
      } catch (err) {
        alert(err);
      }
    },
  },
  getters: {
    getGoods: (state) => {
      return state.goods;
    },
    getGoodsInCart: (state) => {
      return state.goodsInCart;
    },
    getTotalCount: (state) => {
      return state.goodsInCart.reduce((acc, { count }) => acc + count, 0);
    },
    getTotalSum: (state) => {
      return state.goodsInCart.reduce(
        (acc, { count, cost }) => acc + count * cost,
        0
      );
    },
    getCartLastItemId: (state) => {
      return state.goodsInCart[state.goodsInCart.length - 1].id;
    },
  },
  modules: {},
});
