<template>
  <div class="navBar2">
    <div class="logo" @click="selected = null">
      <div class="home-link">
        <router-link to="/" @click.native="disableNavHandler()">
          <p>Minus C</p>
          <p>Fitness</p>
        </router-link>
      </div>

      <nav :class="{ active: isActive }">
        <ul>
          <li v-for="(item, index) of navList" :key="index" @click="disableNavHandler()">
            <router-link :to="item.link" :class="{ highlight: item.title === page }">
              <font-awesome-icon :icon="item.icon" />
              {{ item.title }}
            </router-link>
          </li>
          <li class="vol" @click="musicControl" :class="{ play: !play }">
            <div class="sound-btn"></div>
            <!-- <font-awesome-icon icon="fa-solid fa-volume-high" /> -->
            <p>
              sound
              <span v-if="play">off</span>
              <span v-else>on</span>
            </p>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flip-icon" :class="{ active: isActive }">
      <div class="flip-icon-font">
        <font-awesome-icon icon="fa-solid fa-bars" class="fa-bars" @click="isActive = !isActive" />
      </div>
      <div class="flip-icon-back">
        <font-awesome-icon class="fa-xmark" icon="fa-solid fa-xmark" @click="isActive = !isActive" />
      </div>
    </div>
    <!-- <nav :class="{ active: isActive }">
      <ul>
        <li v-for="(item, index) of navList" :key="index" @click="selectedHandler(index)">
          <router-link :to="item.link" :class="{ highlight: item.title === page }">
            <font-awesome-icon :icon="item.icon" />
            {{ item.title }}
          </router-link>
        </li>
        <li class="vol" @click="musicControl" :class="{ play: !play }">
          <div class="sound-btn"></div>
       
          <p>
            sound
            <span v-if="play">off</span>
            <span v-else>on</span>
          </p>
        </li>
      </ul>
    </nav> -->
    <div class="shop-car">
      <router-link to="/shopping-cart" class="shop-car-icon">
        <font-awesome-icon icon="fa-solid fa-shopping-cart" />
        <span>{{ $store.state.shoppingCart.length }}</span>
      </router-link>
      <div class="shop-cart-hint" :class="{ active: $store.state.hintShow }">
        <div class="title">
          <font-awesome-icon icon="fa-solid fa-circle-info" />
          <p>Minus C - 訊息通知</p>
        </div>
        <div class="content">
          <p>商品已加入購物車</p>
          <router-link to="/shopping-cart" @click.native="shoppingCartLinkHandler()"> 查看購物車 </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar2',

  data() {
    return {
      selected: null,
      play: true,
      itemNum: 0,
      highligh: false,
      page: '',
      aaa: '',
      isActive: false,
      navList: [
        {
          title: 'HOME',
          link: '/',
          icon: 'fa-solid fa-house',
        },
        {
          title: 'SHOP',
          link: '/shop',
          icon: 'fa-solid fa-store',
        },
        {
          title: 'ABOUT',
          link: '/about',
          icon: 'fa-solid fa-hand-back-fist',
        },
        // {
        //   title: 'COURSE',
        //   link: '/#course',
        //   icon: 'fa-solid fa-dumbbell',
        // },
        {
          title: 'COACHES',
          link: '/coaches',
          icon: 'fa-solid fa-child-reaching',
        },
        // {
        //   title: 'CONTACT',
        //   link: '/#contact',
        //   icon: 'fa-solid fa-phone',
        // },
      ],
    };
  },

  methods: {
    musicControl() {
      this.play = !this.play;
      this.$emit('control', this.play);
    },
    disableNavHandler() {
      this.isActive = false;
    },
    shoppingCartLinkHandler() {
      this.$store.commit('SHOPPING_CART_HINT', false);
    },
  },
  watch: {
    $route() {
      this.page = this.$route.meta.page.toUpperCase();
      // this.page = this.$route.meta.page.toUpperCase() ? this.$route.meta.page.toUpperCase() : [];
    },
  },
  mounted() {
    // this.page = this.$route.meta.page.toUpperCase() ;
    // console.log(this.$route.meta.page.toUpperCase());
  },

  updated() {
    this.page = this.$route.meta.page.toUpperCase();

    // console.log(this.$route.meta.page.toUpperCase());
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shop-cart-hint {
  width: 360px;
  height: 100px;
  position: absolute;
  z-index: 50;
  right: -25rem;
  top: -4rem;
  opacity: 0;
  transition: 0.5s all ease-in;
}
.shop-cart-hint.active {
  opacity: 1;
  right: 0rem;
  top: -4rem;
}
.shop-cart-hint .title {
  background-color: #c39173;
  display: flex;
  align-items: center;
  color: #000;
  padding: 0 1rem;
  font-weight: 600;
  height: 35px;
}
.shop-cart-hint .title p {
  margin-left: 5px;
}
.shop-cart-hint .content {
  background-color: rgba(238, 238, 238, 0.697);
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.shop-cart-hint .content p {
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  height: 50%;
}
.shop-cart-hint .content a {
  display: block;
  background: #c39173;
  width: 120px;
  height: 35px;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  line-height: 35px;
  border-radius: 5px;
  align-self: flex-end;
}
.navBar2 {
  background-color: #dac9a6;
  // background-color: #81c7d4;
  background-image: url('../assets/imgs/texture.png');
}
.flip-icon {
  position: relative;
  top: -2.5rem;
  left: -2rem;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  // 内嵌的元素在 3D 空間如何呈現：保留 3D
  transform: rotateX(0deg);
  -webkit-transform: rotateX(0deg);
  transition: 0.5s transform linear;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.flip-icon-font,
.flip-icon-back {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateX(0deg);
  -webkit-transform: rotateX(0deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 0;
  perspective: 0;
}
.flip-icon.active {
  transform: rotateX(180deg);
  -webkit-transform: rotateX(180deg);
  // overflow: hidden;
}
.flip-icon-back {
  transform: rotateX(180deg);
  -webkit-transform: rotateX(180deg);
}

.logo {
  position: relative;
  display: flex;
  cursor: default;
  // flex-direction: column;
  justify-content: center;
  // align-items: center;
  // padding: 2rem;
  padding: 1rem 2rem;
  height: 120px;
  background-color: #dac9a6;
  background-image: url('../assets/imgs/texture.png');
}
// .logo > .home-link {
//   width: 20%;
// }
.logo p {
  // padding: 0.3rem 0 0 1.6rem;
  font-size: 1.8rem;
  font-family: anton;
  padding: 0;
  // color: rgba(0, 0, 0, 0.79);
  color: #eee;
}
.logo p:first-child {
  // color: rgb(120, 220, 188);
  // color: #52433e;
  color: #eee;
  // font-family: homeFont;
  font-size: 2rem;
  // text-align: center;
}
.fa-bars,
.fa-xmark {
  font-size: 2.3rem;
  color: #fff;
  position: absolute;
  top: -4rem;
  left: 3rem;
  cursor: pointer;
  display: none;
}
nav {
  // max-width: 1000px;
  width: 80%;
  margin: auto;
  // height: 40px;
  // display: flex;
  // justify-content: space-between;
}
nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  // min-width: 800px;
}

.vol {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vol p {
  width: 90px;
  text-align: center;
  // font-size: 1.3rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #515151;
}
// .vol::before,
// .vol::after {
//   content: '';
//   position: absolute;
//   width: 5px;
//   height: 30px;
//   background: #f24c4b;
//   top: 3px;
//   left: 8px;
//   opacity: 0;
//   transition: opacity 0.5s ease-in-out;
// }
// .vol::before {
//   transform: rotate(40deg);
// }
// .vol::after {
//   transform: rotate(140deg);
// }
// .vol.stop::before,
// .vol.stop::after {
//   opacity: 1;
// }
.sound-btn {
  width: 60px;
  height: 30px;
  cursor: pointer;
  // position: absolute;
  // top: -15px;
  // left: 0;
  // right: 0;
  // bottom: 0;
  background-color: #bbb;
  transition: 0.4s;
  border-radius: 34px;
}
.vol .sound-btn::before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 5px;
  // bottom: 10px;
  bottom: 10px;
  background-color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}
.vol.play .sound-btn {
  background-color: #dfba71;
}
.vol.play .sound-btn::before {
  transform: translateX(30px);
}
nav ul li a {
  display: inline-block;
  height: 100%;
}
nav ul li,
nav ul li a {
  // color: #aaa;
  color: #ddd;
  font-size: 1.2rem;
  line-height: 40px;
  cursor: pointer;
}
.shop-car {
  position: relative;
}
.shop-car .shop-car-icon {
  position: absolute;
  // position: relative;
  top: -6.5rem;
  // left: 2.5rem;
  right: 2rem;
  // color: #aaa;
  color: #515151;
  font-size: 1.5rem;
  line-height: 40px;
  z-index: 30;
}
.shop-car span {
  position: absolute;
  top: 0rem;
  right: -0.3rem;
  width: 18px;
  height: 18px;
  background: #f24c4b;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  font-weight: 600;
  color: #fff;
  font-size: 0.9rem;
}
.highlight {
  // color: rgb(120, 220, 188);
  color: #515151;
}
@media screen and (max-width: 960px) {
  .logo {
    flex-direction: column;
    text-align: center;
    align-items: center;
    z-index: 28;
    width: 100%;
  }
  .logo .home-link {
    width: 40%;
  }
  .flip-icon {
    z-index: 30;
  }
  .fa-bars,
  .fa-xmark {
    display: inherit;
    z-index: 30;
  }
  nav ul {
    flex-direction: column;
    background-color: #dac9a6;
    opacity: 0;
    z-index: 10;
    top: -200px;
    left: 0;
    position: absolute;
    width: 100%;
    transition: 0.5s top linear, 0.5s opacity linear, 0.5s z-index linear;
  }
  nav.active ul {
    top: 120px;
    opacity: 1;
    z-index: 25;
    background-color: #dac9a6;
    background-image: url('../assets/imgs/texture.png');
  }
}
@media screen and (max-width: 500px) {
  .logo .home-link {
    width: 70%;
  }
}
</style>
