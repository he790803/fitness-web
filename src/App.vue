<template>
  <div id="app">
    <!-- <header class="header_home user_reg" v-title data-title=""></header> -->
    <!-- <div class="loading" v-if="load">Loading...</div> -->
    <loading :active.sync="load">
      <div class="loadingio-spinner-ellipsis-c11ldztfh8d">
        <div class="ldio-i09oj1tsllp">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </loading>
    <NavBar2 @control="musicControlHandler"></NavBar2>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- muted
      autoplay="autoplay" -->
    <audio
      ref="audio"
      :src="require('@/assets/sounds/backgroundMusic.mp3')"
      id="audio"
      hidden
      loop
      preload="auto"
    ></audio>
    <router-view />
  </div>
</template>

<script>
import NavBar2 from '@/components/NavBar2.vue';

export default {
  name: 'App',
  data() {
    return {
      active: false,
      loading: true,
      isLoading: true,
    };
  },
  components: {
    NavBar2,
  },
  created() {
    // if (this.$router.path !== '/') {
    //   this.$router.replace('/');
    // }
    // this.$router.push('/').catch((err) => {
    //   // Ignore the vuex err regarding  navigating to the page they are already on.
    //   if (
    //     err.name !== 'NavigationDuplicated' &&
    //     !err.message.includes('Avoided redundant navigation to current location')
    //   ) {
    //     // But print any other errors to the console
    //     logError(err);
    //   }
    // });
    // 把已知錯誤先catch起來
    window.addEventListener('load', () => {
      this.$store.dispatch('READ_SHOPPING_CART');
      this.$store.dispatch('READ_LIST');
    });
  },

  computed: {
    load() {
      return this.$store.state.loading;
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    },
  },
  watch: {
    load() {
      // Our fancy notification (2).
      console.log(`loading`);
    },
    $route() {
      this.$store.commit('LOADING', true);
    },
  },
  mounted() {
    audio.volume = 0.1;
    // this.$store.dispatch('READ_SHOPPING_CART');
    // this.$store.dispatch('READ_LIST');
    // if (this.$route.meta.shop) {
    //   console.log(222);
    //   this.active = true;
    // }
  },

  updated() {
    this.$store.dispatch('READ_SHOPPING_CART');
    this.$store.dispatch('READ_LIST');
  },
  methods: {
    musicControlHandler(val) {
      if (!val) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    play() {
      audio.play();
    },
  },
};
</script>

<style lang="scss">
// .loading {
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   background: #000;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 4rem;
//   color: #fff;
//   z-index: 100;
// }
@font-face {
  font-family: homeFont;
  src: url('./assets/fonts/Pacifico-Regular.ttf');
}
@font-face {
  font-family: anton;
  src: url('./assets/fonts/Anton-Regular.ttf');
}
@font-face {
  font-family: GenShinGothic;
  src: url('./assets/fonts/GenShinGothic-Bold.ttf');
}

* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
}
body {
  overflow-x: hidden !important;
}
#app {
  // background: #fffbfa;
  background-color: #eee;
  background-image: url('./assets/imgs/texture.png');
  // font-family: anton, GenShinGothic, Arial, sans-serif;
  font-family: Lato, Helvetica, Lucida Grande, Arial, Heiti TC, Microsoft JhengHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

@keyframes ldio-i09oj1tsllp {
  0% {
    transform: translate(12px, 80px) scale(0);
  }
  25% {
    transform: translate(12px, 80px) scale(0);
  }
  50% {
    transform: translate(12px, 80px) scale(1);
  }
  75% {
    transform: translate(80px, 80px) scale(1);
  }
  100% {
    transform: translate(148px, 80px) scale(1);
  }
}
@keyframes ldio-i09oj1tsllp-r {
  0% {
    transform: translate(148px, 80px) scale(1);
  }
  100% {
    transform: translate(148px, 80px) scale(0);
  }
}
@keyframes ldio-i09oj1tsllp-c {
  0% {
    background: #93dbe9;
  }
  25% {
    background: #3b4368;
  }
  50% {
    background: #5e6fa3;
  }
  75% {
    background: #689cc5;
  }
  100% {
    background: #93dbe9;
  }
}
.ldio-i09oj1tsllp div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: translate(80px, 80px) scale(1);
  background: #93dbe9;
  animation: ldio-i09oj1tsllp 1s infinite cubic-bezier(0, 0.5, 0.5, 1);
}
.ldio-i09oj1tsllp div:nth-child(1) {
  background: #689cc5;
  transform: translate(148px, 80px) scale(1);
  animation: ldio-i09oj1tsllp-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1), ldio-i09oj1tsllp-c 1s infinite step-start;
}
.ldio-i09oj1tsllp div:nth-child(2) {
  animation-delay: -0.25s;
  background: #93dbe9;
}
.ldio-i09oj1tsllp div:nth-child(3) {
  animation-delay: -0.5s;
  background: #689cc5;
}
.ldio-i09oj1tsllp div:nth-child(4) {
  animation-delay: -0.75s;
  background: #5e6fa3;
}
.ldio-i09oj1tsllp div:nth-child(5) {
  animation-delay: -1s;
  background: #3b4368;
}
.loadingio-spinner-ellipsis-c11ldztfh8d {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-i09oj1tsllp {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-i09oj1tsllp div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
</style>
