<template>
  <div class="product">
    <div class="product-team">
      <div class="product-group" v-for="item of courseInformation" :key="item.id">
        <div class="product-img">
          <img :src="item.img" />
        </div>
        <div class="product-txt">
          <div class="product-title">
            <h1>{{ item.name }}</h1>
          </div>
          <div class="product-price">
            <span class="special">${{ item.specialOffer * selectedNum }}</span>
            <span class="basic">${{ item.originalPrice * selectedNum }}</span>
          </div>
          <div class="product-content">
            <p>
              {{ item.content }}
            </p>
          </div>
          <div class="product-num">
            <p>課程數量:</p>
            <select name="classNum" v-model="num" @change="onSelectedNum($event, item)">
              <option selected value="0" disabled="disabled">請選擇課程堂數</option>
              <template v-if="item.id === 'E01'">
                <option v-for="option in 1" :value="option" :key="option">{{ option }}</option>
              </template>
              <template v-else>
                <option v-for="option in 10" :value="option" :key="option">{{ option }}</option>
              </template>
            </select>
          </div>
          <div class="product-btn">
            <router-link to="/shop" tag="button">回到商店</router-link>
            <!-- <button>回到商店</button> -->
            <button @click="addShoppingCartHandler(item, num)">加入購物車</button>
          </div>
        </div>
      </div>
      <div class="precautions">
        <h1>注意事項</h1>
        <p>1. 購課後我們將於 1~3 個工作天跟您聯繫，若有任何問題也歡迎撥打 02-3456-7890。</p>
        <p>2. 我們的教練都有經過嚴格篩選，並且教育不得強迫推銷課程。</p>
        <p>3. 上課時，記得自備水壺跟毛巾，並著裝適合運動的服裝、鞋子。</p>
        <p>4. 館內工作人員，均已打滿三劑疫苗，教練授課期間也會全程戴口罩。</p>
        <p>5. 疫情期間入館內皆須量體溫，我們也會頻繁實施館內消毒清潔。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',

  data() {
    return {
      course: this.$store.state.course,
      shopItem: [],
      selectedNum: 1,
      num: 0,
      name: '',
      totalPrice: 0,
      sameItem: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('LOADING', false);
    }, 1500);
  },
  computed: {
    // 拿path帶過來的id與store.state裡的商品資訊做比對
    courseInformation() {
      return this.course.filter((item) => {
        return item.id === this.$route.params.id;
      });
    },
  },
  methods: {
    addShoppingCartHandler(item, num) {
      if (num <= 0) {
        alert('請選擇數量!');
      } else {
        if (this.$store.state.shoppingCart.length) {
          this.$store.state.shoppingCart.forEach((product) => {
            if (product.name === item.name) {
              this.$store.dispatch('CLASS_CONTROL', [item, num]);
              this.sameItem = true;
              console.log('重複');
            }
          });
        }
        if (!this.sameItem) {
          this.$store.dispatch('ADD_ITEM_TO_SHOPPING_CART', {
            id: item.id,
            name: item.name,
            num: num,
            price: item.specialOffer,
            img: item.img,
            totalPrice: this.totalPrice,
          });
          console.log('無重複');
        }
        // 顯示成功加入購物車訊息
        this.$store.commit('SHOPPING_CART_HINT', true);
        scrollTo(0, 0);

        // 隱藏成功加入購物車訊息
        setTimeout(() => {
          this.$store.commit('SHOPPING_CART_HINT', false);
        }, 3000);
      }
      // console.log('錯誤');
    },
    onSelectedNum(event, item) {
      this.selectedNum = parseInt(event.target.value);
      this.totalPrice = item.specialOffer * this.selectedNum;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product-team {
  display: flex;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
}
.product-group {
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 2rem 0 6rem 0;
  // max-width: 1200px;
}
.product-img {
  width: 48%;
  // max-height: 450px;
  padding-right: 2%;
  // background: #aed;
}
.product-img img {
  width: 100%;
  height: 100%;
}
.product-txt {
  width: 48%;
  padding-left: 2%;
  max-height: 450px;
  // background: #fae;
}
.product-price {
  padding: 1.2rem 0 0.5rem 0;
  font-family: anton;
}
.product-price .special {
  font-size: 1.8rem;
  padding-right: 0.5rem;
  color: rgba(201, 25, 25, 0.873);
}
.product-price .basic {
  font-size: 1rem;
  text-decoration: line-through;
  padding-left: 0.5rem;
  color: #aaa;
}
.product-content {
  line-height: 25px;
  padding: 1rem 0;
}
.product-num p {
  padding: 1rem 0;
}

.product-num select {
  width: 100%;
  height: 40px;
  padding: 12px 14px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #ccc;
  outline-color: #c39173;
  color: #000;
}
.product-num select option {
  border: 1px solid #e2eded;
  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
}
.product-btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}
.product-btn button {
  background: #fff;
  border: 1px solid #c39173;
  border-radius: 0.25rem;
  width: 120px;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  color: #c39173;
  font-weight: 600;
}
.product-btn button:hover {
  color: #fff;
  background-color: #c39173;
}
.product-btn button:first-child {
  margin-right: 1.2rem;
}
.precautions {
  border-top: 2px solid #c39173;
  border-bottom: 2px solid #c39173;
  padding: 1rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.precautions p {
  padding: 1rem;
}
@media screen and (max-width: 830px) {
  .product-group {
    flex-direction: column;
  }
  .product-img,
  .product-txt {
    width: 100%;
    padding: 2%;
  }
}
</style>
