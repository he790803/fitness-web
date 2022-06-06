<template>
  <div class="shop">
    <!-- <ShopPage></ShopPage> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import ShopPage from '@/components/ShopPage.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'shopHeader',
  components: {
    ShopPage,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
