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
      <button @click="addToCart" class="good__to-cart">
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
  methods: {
    addToCart() {
      this.$store.commit("addGoodToCart", {
        id: this.id,
        title: this.title,
        cost: this.cost,
        image: this.image,
      });
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
}
</style>