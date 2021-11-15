import Vue from "vue";
import Vuex from "vuex";
import getImages from "../utils/getImages";

Vue.use(Vuex);

const images = getImages(
  require.context("../assets/images", false, /\.(webp)$/)
);
console.log(images)
export default new Vuex.Store({
  state: () => ({
    goods: [],
  }),
  mutations: {
    setGoods(state, payload) {
      state.goods = payload;
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
          image: images[Math.round(Math.random() * images.length)],
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
  },
  modules: {},
});
