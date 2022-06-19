<template>
  <div class="home">
    <HomeImage2></HomeImage2>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import NavBar2 from '@/components/NavBar2.vue';
import HomeImage2 from '@/components/HomeImage2.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    NavBar2,
    HomeImage2,
  },
};
</script>

<style scoped></style>
