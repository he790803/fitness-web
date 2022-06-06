<template>
  <div class="homeImage">
    <div class="homeImg">
      <img src="/images/home-image.jpg" alt="首頁大圖" />
      <!-- <div class="slogan">No pain, no gain.</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeImage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.homeImage {
  // display: flex;
  min-height: 100vh;
  padding-left: 28rem;
  font-family: homeFont;
}
.aaa {
  position: relative;
}
img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  vertical-align: middle;
}
.slogan {
  position: absolute;
  z-index: 2;
  left: 20%;
  top: 25%;
  color: #eebe00;
  width: 400px;
  height: 100px;
  font-size: 2.2rem;
  font-family: 'homeFont';
}
</style>
