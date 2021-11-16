<template>
  <div class="cart__container">
    <div class="header__wrapper">
      <div class="cart__title">Корзина</div>
      <div class="buttons__wrppaer">
        <button @click="$router.push('/')" class="button__to-home">На главную</button>
        <button @click="$router.push('/favs')" class="button__to-favs">В избранное</button>
      </div>
    </div>
    <div class="cart__wrapper">
      <div v-if="goodsInCart.length === 0" class="cart__empty">
        Пока корзина пуста
      </div>
      <div v-else class="cart__goods-list">
        <GoodInCart v-for="good in goodsInCart" :key="good.id"
        :title="good.title"
        :cost="good.cost"
        :image="good.image"
        :id="good.id" 
        :count="good.count"
        />
      </div>
      <div class="cart__checkout">
        <button @click="showCartList" class="button__buy-goods">Перейти к оформлению</button>
        <div class="goods__overall-count">
          <span>
             Всего товаров корзине:
          </span>
          <span>
            {{totalCount}}
          </span>  
        </div>
        <div class="goods__overall-cost">
          <span>
            Общая стоимость 
          </span>
          <span>
            {{totalSum}} ₽
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodInCart from "../components/GoodInCart.vue";
export default {
  components: { GoodInCart },
  computed: {
    goodsInCart() {
      return this.$store.getters.getGoodsInCart;
    },
    totalCount() {
      return this.$store.getters.getTotalCount;
    },
    totalSum() {
      return this.$store.getters.getTotalSum;
    },
  },
  methods: {
    showCartList() {
      if (this.goodsInCart.length === 0) {
        alert("В корзине пока ничего нет");
      } else {
        const list = this.goodsInCart.map(
          (item, index) =>
            `${index + 1} ${item.title} ${item.count} шт. ${item.cost} руб.\n`
        );
        alert(
          `${list.join("")}\nВсего позиций: ${this.totalCount}\nСумма заказа: ${
            this.totalSum
          } руб.`
        );
      }
    },
  },
};
</script>

<style>
@import "../style/colors.css";
</style>
<style lang="less" scoped>
.cart {
  &__container {
    background: var(--background-grey);
    height: 100vh;
    overflow: hidden;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
  }
  &__title {
    font-weight: 600;
    font-size: 32px;
    margin: 16px;
  }
  &__empty {
    grid-column: 1 e("/") 5;
    background: #fff;
    border-radius: 4px;
    margin: 12px;
    overflow-y: auto;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__goods-list {
    grid-column: 1 e("/") 5;
    background: #fff;
    border-radius: 4px;
    margin: 12px;
    overflow-y: auto;
    height: 480px;
    width: 100%;
  }
  &__checkout {
    grid-column: 5 e("/") 7;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    background: #fff;
    margin: 16px;
    margin-bottom: 280px;
    border-radius: 4px;
    padding: 12px;
  }
}
.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
}
.text-center {
  margin: auto auto;
}

.goods {
  &__overall-count {
    display: flex;
    justify-content: space-between;
  }
  &__overall-cost {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }
}
.button {
  &__to-home,
  &__to-favs {
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
  &__to-favs {
    background-color: var(--secondary);
  }
    &__buy-goods {
    grid-row: 1 e("/") 3;
    background-color: var(--checkout-btn);
    border: none;
    color: white;
    padding: 4px 48px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    margin: 0 auto;
    height: 44px;
    cursor: pointer;
  }
}
</style>