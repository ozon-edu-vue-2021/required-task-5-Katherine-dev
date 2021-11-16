<template>
  <div class="favs__container">
    <div class="header__wrapper">
       <span class="favs__title">
        Избранное
      </span>
      <div class="buttons__wrapper">
        <button @click="$router.push('/cart')" class="button__to-cart">Перейти в корзину</button>
        <button @click="$router.push('/')" class="button__to-home">Перейти на главную</button>
      </div>
    </div>
    <div class="favs__wrapper">
      <Good v-for="(good,index) in favourites" :key="good.id +'/'+ index"
      :title="good.title"
      :cost="good.cost"
      :image="good.image"
      :id="good.id"
      :fav="good.fav"
      />
    </div>
  </div>
</template>

<script>
import Good from "../components/Good.vue";

export default {
  computed: {
    favourites() {
      return this.$store.getters.getFavourites;
    },
  },
  components: { Good },
};
</script>

<style>
@import "../style/colors.css";
</style>
<style lang="less" scoped>
.favs {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 4px;
    grid-row-gap: 16px;
    padding: 16px;
  }
  &__title {
    font-weight: 600;
    font-size: 32px;
    margin: 16px;
  }
}
.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
}
.button {
  &__to-cart,
  &__to-home {
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
  &__to-home {
    background-color: var(--secondary);
  }
}
</style>