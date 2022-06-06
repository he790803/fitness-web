<template>
  <div class="shoppingCartInformation">
    <div class="order-group">
      <div class="order-list">
        <h1>購物車</h1>
        <router-link to="/shop">繼續購物</router-link>
      </div>
    </div>
    <div class="order-item-group">
      <div class="order-item" v-for="(item, index) of shoppingCartList" :key="index">
        <div class="item-img">
          <img :src="item.img" />
        </div>
        <div class="description">
          <div class="title">{{ item.name }}</div>
          <div class="num">
            <button
              @click="$store.dispatch('CLASS_CONTROL', [item, -1])"
              :disabled="item.num <= 1"
              :class="{ disabled: item.num <= 1 }"
            >
              -
            </button>
            <input type="number" min="1" disabled="disabled" :value="item.num" />
            <button
              @click="$store.dispatch('CLASS_CONTROL', [item, 1])"
              :disabled="item.num >= 10 || item.id === 'E01'"
              :class="{ disabled: item.num >= 10 || item.id === 'E01' }"
            >
              +
            </button>
          </div>
        </div>
        <div class="price">${{ (item.totalPrice = item.price * item.num) }}</div>
        <div class="delete" @click="deleteHandler(item)">
          <font-awesome-icon class="deleteIcon" icon="fa-solid fa-trash-can" />
        </div>
      </div>
    </div>
    <div class="price-list">
      <div class="coupon">
        <p>折扣碼:</p>
        <input type="text" placeholder="請輸入優惠代碼" v-model="couponCode" @keyup.enter="couponHandler(couponCode)" />
      </div>
      <div class="subtotal">
        <p>小計:</p>
        <p>${{ subtotalPrice }}</p>
      </div>
      <div class="discount">
        <template v-if="isDiscount">
          <span>折扣:</span>
          <div class="discount-group">
            <div class="discount-item" v-for="(item, index) of couponUse" :key="index">
              {{ item.name }}
              <font-awesome-icon class="x-mark" icon="fa-solid fa-xmark" @click="cancelCoupon(item.code)" />
            </div>
          </div>
          <!-- <span>{{ isDiscount ? isDiscount : '無' }}</span> -->
        </template>
      </div>
      <div class="total">
        <span>總計:</span>
        <span>${{ ccc }}</span>
      </div>
    </div>
    <div class="buyer-information">
      <h1>填寫資料</h1>
      <div class="input-item">
        <label for="recipient">收件人姓名</label>
        <input
          type="text"
          name="收件人姓名"
          id="recipient"
          placeholder="請輸入收件人姓名"
          v-model.trim="customer.name"
        />
        <span v-if="errors.nameError">{{ nameErrorMessage }}</span>
      </div>
      <div class="input-item">
        <label for="email">Email</label>
        <input type="text" name="Email" id="email" placeholder="請輸入Email" v-model.trim="customer.Email" />
        <span v-if="errors.EmailError">{{ EmailErrorMessage }}</span>
      </div>
      <div class="input-item">
        <label for="cellphone">手機</label>
        <input type="text" name="手機" id="cellphone" placeholder="請輸入手機號碼" v-model.trim="customer.cellphone" />
        <span v-if="errors.cellphoneError">{{ cellphoneErrorMessage }}</span>
      </div>
      <div class="input-item">
        <label for="address">地址</label>
        <input
          type="text"
          name="收件地址人姓名"
          id="address"
          placeholder="請輸入收件地址"
          v-model.trim="customer.address"
        />
        <span v-if="errors.addressError">{{ addressErrorMessage }}</span>
      </div>
      <div class="input-item">
        <label for="pay-method">付款方式</label>
        <select name="付款方式" id="pay-method" v-model="customer.payMethod">
          <option disabled="disabled" selected="selected" value="">請選擇購買方式</option>
          <option value="ATM">ATM</option>
          <option value="Credit">信用卡</option>
          <option value="Cash">貨到付款</option>
        </select>
        <span v-if="errors.payMethodError">{{ payMethodErrorMessage }}</span>
      </div>
      <div class="input-item">
        <label for="remark">備註</label>
        <textarea name="remark" id="" cols="30" rows="3" v-model="customer.remark"></textarea>
      </div>
    </div>
    <div class="checkout">
      <router-link
        @click.native="submitHandler(shoppingCart)"
        to="shopping-cart/checkout"
        tag="button"
        :disabled="(disabled = !submitCheck)"
        :class="{ disabled: !submitCheck }"
        >結帳</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'shoppingCartInformation',
  mounted() {
    this.subtotal;

    setTimeout(() => {
      this.$store.commit('LOADING', false);
    }, 1500);
  },
  data() {
    return {
      shoppingCart: null,
      listTotalPrice: 0,
      subtotalPrice: 0,
      discountNum: 0,
      isDiscount: null,
      couponUse: [],
      couponCode: '',
      coupons: [
        { code: 'VIP666', discount: 0.6, name: '6折優惠券', isUse: false },
        { code: 'VIP888', discount: 0.8, name: '8折優惠券', isUse: false },
      ],
      customer: { name: '', Email: '', cellphone: null, address: '', payMethod: '', remark: '' },
      errors: {
        nameError: false,
        EmailError: false,
        cellphoneError: false,
        addressError: false,
        payMethodError: false,
      },
      nameErrorMessage: '',
      EmailErrorMessage: '',
      cellphoneErrorMessage: '',
      addressErrorMessage: '',
      payMethodErrorMessage: '',
    };
  },
  watch: {
    shoppingCart: {
      handler: function () {
        this.subtotal;
        // 當list變動，就重新計算一次總價
        if (this.shoppingCart.length <= 0) {
          console.log(0);
        }
      },
      deep: true,
    },
    customer: {
      handler: function () {
        if (!this.customer.name) {
          this.errors.nameError = true;
          this.nameErrorMessage = '收件人不得為空!';
        } else {
          this.errors.nameError = false;
          this.nameErrorMessage = '';
        }

        if (!this.customer.address) {
          this.errors.addressError = true;
          this.addressErrorMessage = '收件地址不得為空!';
        } else {
          this.errors.addressError = false;
          this.addressErrorMessage = '';
        }

        if (!this.customer.payMethod) {
          this.errors.payMethodError = true;
          this.payMethodErrorMessage = '請選擇付款方式!';
        } else {
          this.errors.payMethodError = false;
          this.payMethodErrorMessage = '';
        }

        let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(this.customer.Email)) {
          this.errors.EmailError = true;
          this.EmailErrorMessage = 'Email格式錯誤!';
        } else {
          this.errors.EmailError = false;
          this.EmailErrorMessage = '';
        }

        let mobileReg = /^(09)[0-9]{8}$/;
        if (!mobileReg.test(this.customer.cellphone)) {
          this.errors.cellphoneError = true;
          this.cellphoneErrorMessage = '手機格式錯誤!';
        } else {
          this.errors.cellphoneError = false;
          this.cellphoneErrorMessage = '';
        }
      },
      deep: true,
    },
  },
  methods: {
    submitHandler(item) {
      // let a = [{ username: 'AAA', phone: 123123123, soppingCart: [{ name: 'A課程' }, { name: 'B課程' }] }];
      this.$store.dispatch('UPDATE_SHOPPING_CART', [this.customer, item, this.listTotalPrice]);
      // 清空購物車(待補)
    },
    deleteHandler(item) {
      this.$store.dispatch('REMOVE_SHOPPING_CART_ITEM', item);
    },
    couponHandler(couponCode) {
      for (let i = 0; i < this.coupons.length; i++) {
        if (!this.coupons[i].isUse) {
          if (this.coupons[i].code === couponCode) {
            this.coupons[i].isUse = true;
            this.isDiscount = this.coupons[i].name;
            this.discountNum = this.coupons[i].discount;
            this.couponUse.push({ code: this.coupons[i].code, name: this.coupons[i].name });
            this.listTotalPrice = this.subtotalPrice * this.coupons[i].discount;
            break;
          }
        } else {
          window.alert('已使用優惠券');
          break;
        }
      }
      this.couponCode = '';

      //   this.coupons.forEach((coupon) => {
      //     if (!coupon.isUse) {
      //       if (coupon.code === couponCode) {
      //         coupon.isUse = true;
      //         this.isDiscount = coupon.name;
      //         this.discountNum = coupon.discount;
      //         this.couponUse.push({ code: coupon.code, name: coupon.name });
      //         this.listTotalPrice = this.subtotalPrice * coupon.discount;
      //       }
      //     } else {
      //       window.alert('已使用優惠券');
      //     }
      //     this.couponCode = '';
      //   });
      // },
    },
    cancelCoupon(code) {
      this.coupons.forEach((coupon) => {
        if (coupon.code === code) {
          coupon.isUse = false;
          this.isDiscount = null;
        }
      });
      this.couponUse = this.couponUse.filter((coupon) => {
        return coupon.code !== code;
      });
    },
  },
  computed: {
    subtotal() {
      this.subtotalPrice = 0;
      return this.shoppingCart.map((item) => {
        return (this.subtotalPrice += item.totalPrice);
      });
    },
    ccc() {
      if (!this.isDiscount) {
        return (this.listTotalPrice = this.subtotalPrice);
      } else {
        return (this.listTotalPrice = this.subtotalPrice * this.discountNum);
      }
    },
    shoppingCartList() {
      return (this.shoppingCart = this.$store.state.shoppingCart);
    },
    submitCheck() {
      if (
        !this.customer.name ||
        this.nameErrorMessage ||
        !this.customer.Email ||
        this.EmailErrorMessage ||
        !this.customer.address ||
        this.addressErrorMessage ||
        !this.customer.cellphone ||
        this.cellphoneErrorMessage ||
        !this.customer.payMethod ||
        this.payMethodErrorMessage
      ) {
        return false;
      } else {
        return true;
      }
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
  border-bottom: 1px solid #e6aa33;
  border-top: 1px solid #e6aa33;
  padding: 15px 12px;
}
.order-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order-list a {
  border: 2px solid #dfba71;
  color: #e6aa33;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 4rem;
  padding: 1rem 3rem;
  letter-spacing: 3px;
  transition: background 0.5s ease-out, color 0.5s ease-out;
}
.order-list a:hover {
  background: #dfba71;
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
  width: 40%;
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
}
.num button {
  border: none;
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 50%;
  background: #e6aa33;
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
.delete {
  width: 10%;
}
.deleteIcon:hover {
  color: rgba(218, 25, 25, 0.854);
  cursor: pointer;
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
}
.price-list .coupon p {
  width: 30%;
}
.price-list .coupon input {
  border: 0;
  border-bottom: 1px solid #000;
  outline: 0;
  padding: 0.2rem 0.5rem;
  text-align: center;
  width: 70%;
  background-color: #eee;
  background-image: url('../assets/imgs/texture.png');
}
.subtotal,
.discount,
.total {
  display: flex;
  width: 250px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}
.discount-group {
  display: flex;
  flex-direction: column;
}
.discount-item {
  // border: 1px solid rgb(37, 190, 55);
  color: #fff;
  background: rgb(56, 210, 74);
  border-radius: 0.3rem;
  padding: 0.4rem;
  margin-top: 0.3rem;
  font-weight: 600;
}
.x-mark {
  width: 1rem;
  background: red;
  cursor: pointer;
}
.total {
  font-size: 1.6rem;
  font-weight: 600;
}

.input-item {
  display: flex;
  flex-direction: column;
  padding: 0.375rem 0.75rem;
  margin-bottom: 1.5rem;
}
.input-item span {
  color: red;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 2px;
}
.buyer-information h1 {
  padding-bottom: 1rem;
}
.buyer-information label {
  padding-bottom: 1rem;
}
.buyer-information input,
.buyer-information select {
  border: 0;
  border-bottom: #000 1px solid;
  outline: 0;
  color: #777;
}

.buyer-information input,
.buyer-information select,
.buyer-information textarea {
  font-size: 1rem;
  background-color: #eee;
  background-image: url('../assets/imgs/texture.png');
}
.buyer-information textarea {
  height: 100px;

  overflow: auto;
  resize: vertical;
  outline: 0;
}
.checkout {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  // width: 100px;
  // height: 100px;
}
.checkout button {
  background: #e6aa33;
  color: #fff;
  width: 6.5rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  border-radius: 0.3rem;
  border: 0;
  cursor: pointer;
  font-size: 1.2rem;
  letter-spacing: 3px;
}
button.disabled {
  background: #aaa;
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
