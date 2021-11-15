<template>
  <div class="good__wrapper">
    <div class="good__image">
      <img v-if="image" :src="image" :alt="title" width="200" height="200">
      <div v-else class="good__no-image">Нет изображения</div>
    </div>
    <div class="good__title">{{ title }}</div>
    <div class="good__cost">
      <span v-if="cost">
        {{ cost }} руб.
      </span>
      <span v-else>
        Цена не указана
      </span>
    </div>
    <button class="good__to-cart">В корзину</button>
  </div>
</template>

<script>

export default {
  props: {
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
}
</script>
