<template>
  <div class="shopping-car">
    <ul class="shop-step">
      <li class="shop-step-list done">
        <div class="shop-step-num">1</div>
        <p>訂單</p>
      </li>
      <li class="shop-step-list" :class="{ done: step2 }">
        <div class="shop-step-num">2</div>
        <p>付款</p>
      </li>
      <li class="shop-step-list" :class="{ done: step3 }">
        <div class="shop-step-num">3</div>
        <p>完成</p>
      </li>
    </ul>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'shoppingCar',
  components: {
    Footer,
  },

  mounted() {
    this.step2 = this.$route.meta.step2 || false;
    this.step3 = this.$route.meta.step3 || false;
  },
  updated() {
    this.step2 = this.$route.meta.step2 || false;
    this.step3 = this.$route.meta.step3 || false;
  },
  data() {
    return {
      step2: false,
      step3: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.shop-step {
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
  margin: auto;
}

.shop-step-list {
  // display: inline-block;
  width: 100%;
  vertical-align: middle;
  position: relative;
  margin-top: 3.5rem;
  text-align: center;
}
.shop-step-list p {
  text-align: center;
}
.shop-step-num {
  width: 45px;
  height: 45px;
  font-size: 20px;
  font-weight: 700;
  line-height: 45px;
  border: 2px solid #dfba71;
  border-radius: 99em;
  background: #fff;
  margin: 0 auto;
  position: relative;
  z-index: 5;
}
.shop-step-list.done .shop-step-num {
  background: #dfba71;
  color: #fff;
}
.shop-step-list::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #dfba71;
  position: absolute;
  top: 22px;
  right: -50%;
}
.shop-step-list:last-child::after {
  content: '';
  display: none;
}
</style>
