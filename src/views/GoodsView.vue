<template>
  <div class="goods__container">
    <div class="header__wrapper">
    <button @click="$router.push('/cart')" class="button__to-cart">Перейти в корзину</button>
    </div>
    <div class="goods__wrapper">
      <Good v-for="(good,index) in goods" :key="good.id +'/'+ index"
      :title="good.title"
      :cost="good.cost"
      :image="good.image"
      :id="good.id"
      />
    </div>
  </div>
</template>

<script>
import Good from "../components/Good.vue";

export default {
  data: () => ({}),
  computed: {
    goods() {
      return this.$store.getters.getGoods;
    },
  },
  components: { Good }
};
</script>
<style>
@import "../style/colors.css";
</style>
<style lang="less" scoped>
.goods {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 4px;
    grid-row-gap: 16px;
    padding: 16px;
  }
}
.header {
  &__wrapper {
    display: flex;
    justify-content: flex-end;
  }
}
.button {
  &__to-cart {
    margin: 16px;
    background-color: var(--primary);
    border: none;
    color: white;
    padding: 8px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
  }
}
</style>