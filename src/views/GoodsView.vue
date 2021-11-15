<template>
<div class="goods__wrapper">
  <Good v-for="good in goods" :key="good.id"
  :title="good.title"
  :cost="good.cost"
  :image="good.image"
  />
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
  components: { Good },
  created() {
    this.$store.dispatch("fetchGoods");
  },
};
</script>

<style scoped>
</style>