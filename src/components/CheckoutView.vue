<template>
  <div class="shoppingCartInformation">
    <div class="order-group">
      <div class="order-list">
        <h1>付款資訊</h1>
      </div>
    </div>
    <div class="order-item-group">
      <div class="order-item" v-for="(item, index) of productInformation" :key="index">
        <div class="item-img">
          <img :src="item.img" />
        </div>
        <div class="description">
          <div class="title">{{ item.name }}</div>
        </div>
        <div class="num">
          <p>{{ item.num }}堂</p>
        </div>
        <div class="price">${{ item.totalPrice }}</div>
      </div>
    </div>
    <div class="price-list">
      <!-- <div class="coupon">
        <span>折價券:</span>
        <span>無</span>
      </div>
      <div class="discount">
        <span>折扣:</span>
        <span>$0</span>
      </div> -->
      <div class="total">
        <span>總計(已折扣):</span>
        <span>${{ listPrice }}</span>
      </div>
    </div>
    <div class="buyer-information">
      <h1>訂購人資料</h1>
      <ul v-if="customerInformation.name ? customerInformation.name : []">
        <li>
          <label for="recipient">收件人姓名:</label>
          <p for="recipient">{{ customerInformation.name }}</p>
        </li>
        <li>
          <label for="email">Email:</label>
          <p for="recipient">{{ customerInformation.Email }}</p>
        </li>
        <li>
          <label for="cellphone">手機:</label>
          <p for="recipient">{{ customerInformation.cellphone }}</p>
        </li>
        <li>
          <label for="address">地址:</label>
          <p for="recipient">{{ customerInformation.address }}</p>
        </li>
        <li>
          <label for="pay-method">付款方式:</label>
          <p for="recipient">{{ customerInformation.payMethod }}</p>
        </li>
        <!-- <li>
          <label for="remark">備註:</label>
          <textarea name="remark" id="" cols="30" rows="3" disabled="disabled"> </textarea>
        </li> -->
      </ul>
    </div>
    <div class="checkout">
      <router-link to="/shopping-cart/complete" @click.native="complete">付款</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shoppingCartInformation',

  // mounted() {
  //   this.customerInformation;
  //   this.productInformation;
  //   this.listPrice;
  // },
  // updated() {
  //   this.customerInformation;
  //   this.productInformation;
  //   this.listPrice;
  // },
  data() {
    return {
      shoppingListA: this.$store.state.shoppingList,
      totalPrice: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('LOADING', false);
    }, 1500);
  },
  methods: {
    complete() {
      this.$store.dispatch('COMPLETE_LIST');
    },
  },
  computed: {
    customerInformation() {
      return this.$store.state.shoppingList[0] ? this.$store.state.shoppingList[0] : [];
    },
    productInformation() {
      return this.$store.state.shoppingList[1];
    },
    listPrice() {
      return this.$store.state.shoppingList[2];
    },
  },
};
</script>

<style scoped lang="scss">
.shoppingCartInformation {
  max-width: 1180px;
  margin: 2rem auto;
  padding: 0 2rem;
}
.order-group {
  display: flex;
  justify-content: space-between;
  text-align: left;
  border-bottom: 1px solid;
  border-top: 1px solid;
  padding: 15px 12px;
}
.order-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order-list a {
  border: 2px solid #274555;
  color: #274555;
  border-radius: 4rem;
  padding: 1rem 3rem;
  transition: background 0.5s ease-out, color 0.5s ease-out;
}
.order-list a:hover {
  background: #274555;
  color: #fff;
}

.order-item:nth-child(even) {
  background: #ddd;
}
.order-item {
  padding: 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
}
.order-item .item-img {
  width: 20%;
}
.item-img img {
  width: 100%;
}
.order-item .description {
  width: 50%;
  // padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.description .title {
  font-size: 2rem;
}
.description .num {
  padding: 0.3rem 0;
  width: 10%;
}
.num button {
  border: none;
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 50%;
  background: #274555;
  color: #fff;
  cursor: pointer;
}
.num input {
  padding: 0.3rem 0;
  margin: 0 1rem;
  width: 60px;
}
.price {
  width: 20%;
}

.price-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 200px;
}
.price-list .coupon {
  display: flex;
  padding: 0.5rem;
  width: 250px;
  justify-content: space-between;
}
.price-list .coupon span {
  display: block;
}

.discount,
.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}
.total {
  font-size: 1.6rem;
  font-weight: 600;
}
.buyer-information {
  display: flex;
  flex-direction: column;
}
.buyer-information h1 {
  padding-bottom: 1rem;
}
.buyer-information ul {
  display: flex;
  flex-direction: column;
}
.buyer-information ul li {
  display: flex;
  font-size: 1.3rem;
}

.buyer-information label {
  padding-bottom: 1rem;
  width: 30%;
}

.buyer-information textarea {
  height: 100px;
  max-width: 1116px;
  padding: 0.375rem 0.75rem;
  margin-bottom: 1.5rem;
  outline: 0;
}
.checkout {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  // width: 100px;
  // height: 100px;
}
.checkout a {
  background: #274555;
  color: #fff;
  width: 6.5rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  border-radius: 0.3rem;
}
@media screen and (max-width: 830px) {
  .description {
    padding: 0.3rem;
  }
  .description .title {
    font-size: 1rem;
  }
  .order-item .num button {
    width: 20px;
    height: 20px;
    font-size: 1rem;
    font-weight: 400;
    vertical-align: middle;
  }
  .num input {
    padding: 0;
    margin: 0 0.5rem;
    width: 50px;
  }
}
</style>
