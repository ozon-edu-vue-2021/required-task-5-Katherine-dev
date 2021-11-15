<template>
<div class="good__container">
  <div class="good__wrapper" :class="{bottom_line: notLast}">
    <div class="good__image">
      <img v-if="image" :src="image" :alt="title" width="100" height="100">
      <div v-else class="good__no-image">Нет изображения</div>
    </div>
    <div class="good__title">
      {{ title }}
      </div>
    <a @click.prevent="removeFromCart" class="good__remove-from-cart-btn" href="">
      Удалить
    </a>
    <div class="good__cost">
      <span v-if="cost">
        {{ cost }} руб.
      </span>
      <span v-else>
        Цена не указана
      </span>
    </div>
    <div class="good__count">    
      <button @click="increaseCounter" class="plus-btn">+</button>
      <span class="count-num">{{count}}</span>
      <button @click="decreaseCounter" class="minus-btn">-</button>
    </div>
  </div>
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
    count: {
      required: true,
      type: [Number, null],
    },
  },
  computed: {
    cartLastItemId() {
      return this.$store.getters.getCartLastItemId;
    },
    notLast() {
      return this.id !== this.cartLastItemId;
    },
  },
  methods: {
    removeFromCart() {
      this.$store.commit("removeFromCart", this.id);
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
  &__container {
    margin: 24px;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 150px;
  }
  &__image {
    margin: auto auto;
    grid-row: 1 e("/") 3;
  }
  &__title {
    grid-row: 1 e("/") 2;
    margin-top: 4px;
    margin: auto 0;
  }
  &__cost {
    grid-row: 1 e("/") 3;
    margin: auto auto;
    font-weight: 600;
  }
  &__count {
    grid-row: 1 e("/") 3;
    margin: auto auto;
    font-weight: 600;
  }
  &__remove-from-cart-btn,
  &__remove-from-cart-btn:hover,
  &__remove-from-cart-btn:active,
  &__remove-from-cart-btn:focus {
    grid-row: 2 e("/") 3;
    text-decoration: none;
    color: var(--primary);
    margin: auto 0;
  }
}
.bottom_line {
  border-bottom: 1px solid lightgray;
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
.minus-btn, .count-num {
  margin-left: 8px;
}
</style>