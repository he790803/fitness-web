<template>
  <div class="homeImage2">
    <div class="video-background">
      <!-- <img
        v-if="$store.state.loading"
        ref="imgRight"
        src="https://via.placeholder.com/150/9a9998/9a9998"
        alt="首頁大圖-右"
      /> -->
      <div class="slogan">
        <p>Sweat is the</p>
        <p>lubricant of success.</p>
      </div>
      <img v-if="$store.state.loading" src="https://via.placeholder.com/150/9a9998/9a9998" alt="" />
      <video v-else ref="imgRight" playsinline src="../assets/imgs/homevideo-1.mp4" muted loop autoplay></video>
    </div>
    <!-- <div class="img-group">
      <div class="img-left">
        <img ref="imgLeft" src="/images/homeImg3.jpg" alt="首頁大圖-左" />
      </div>

      <div class="img-right">
        <div class="slogan">
          <p>Sweat is the</p>
          <p>lubricant of success.</p>
        </div>
        <img ref="imgRight" src="https://via.placeholder.com/150/9a9998/9a9998" alt="首頁大圖-右" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HomeImage2',
  data() {
    return {
      loading: true,
      imgRight: null,
    };
  },
  mounted() {
    this.imgRight = document.createElement('video');
    this.imgRight.src = require('@/assets/imgs/homevideo-1.mp4');
    this.imgRight.onloadstart = () => {
      // 图片加载成功后把地址给原来的img
      // this.$refs.imgRight.src = imgRight.src;
      this.$store.commit('LOADING', false);
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.homeImage2 {
  width: 100vw;
  max-height: calc(100vh - 160px);
}
.video-background {
  width: 100vw;
  max-height: calc(100vh - 160px);
}
.video-background img {
  width: 100%;
  height: 100%;
}
.video-background video {
  width: 100vw;
  // 原本160px
  height: calc(100vh - 120px);
  object-fit: cover;
  vertical-align: middle;
}
.img-group {
  min-width: 100vw;
  max-height: calc(100vh - 160px);
  display: flex;
}
.img-group img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.img-left {
  width: 50%;
  height: calc(100vh - 160px);
}
.img-right {
  position: relative;
  width: 50%;
  // max-height: calc(100vh - 160px);
}

.img-right img {
  filter: opacity(0.4);
}
.slogan {
  position: absolute;
  top: 45%;
  left: 15%;
  z-index: 2;
}
.slogan p {
  font-size: 3rem;
  // color: rgb(120, 220, 188);
  color: #fff;
  font-weight: 600;
}
@media screen and (max-width: 830px) {
  .video-background video {
    height: calc(100vh - 120px);
  }
}
</style>
