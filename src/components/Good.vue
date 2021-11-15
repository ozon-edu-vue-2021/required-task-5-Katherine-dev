<template>
  <div class="good__wrapper">
    <div class="good__image">
      <img v-if="image" :src="image" :alt="title" width="300" height="300">
      <div v-else class="good__no-image">Нет изображения</div>
    </div>
    <div class="good__cost">
      <span v-if="cost">
        {{ cost }} руб.
      </span>
      <span v-else>
        Цена не указана
      </span>
    </div>
    <div class="good__title">{{ title }}</div>
    <div v-if="getCountInCart" class="good__in-cart">
      <button @click="increaseCounter" class="plus-btn">+</button>
      <span class="good__count">{{getCountInCart}}</span>
      <button @click="decreaseCounter" class="minus-btn">-</button>
    </div>
    <button v-else @click="addToCart" class="good__to-cart">
      В корзину
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: [Number, null],
    },
    title: {
      required: true,
      type: String,
    },
    image: {
      required: false,
      default: () => null,
      type: [String, null],
    },
    cost: {
      required: true,
      default: () => null,
      type: [Number, null],
    },
  },

  computed: {
    getGoodsInCart() {
      return this.$store.getters.getGoodsInCart;
    },
    getCountInCart() {
      const inCart = this.getGoodsInCart.find((item) => item.id === this.id);
      if (inCart) {
        return inCart.count;
      }
      return 0;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addGoodToCart", {
        id: this.id,
        title: this.title,
        cost: this.cost,
        image: this.image,
      });
      this.count = this.getCountInCart;
    },
    increaseCounter() {
      this.$store.commit("increaseCount", this.id);
    },
    decreaseCounter() {
      this.$store.commit("decreaseCount", this.id);
    },
  },
};
</script>

<style>
@import "../style/colors.css";
</style>

 <style lang="less" scoped>
.good {
  &__wrapper {
    width: 300px;
  }
  &__title {
    margin-top: 4px;
  }
  &__cost {
    margin-top: 8px;
    font-weight: 600;
  }
  &__to-cart {
    margin-top: 16px;
    background-color: var(--secondary);
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
  &__count {
    margin-left: 8px;
  }
}
.plus-btn,
.minus-btn {
  margin-top: 16px;
  background-color: lightgrey;
  border: none;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
}
.plus-btn:hover,
.minus-btn:hover {
  background-color: grey;
}
.minus-btn {
  margin-left: 8px;
}
</style>