<template>
  <div class="about">
    <div class="banner">
      <div class="text" :class="{ action: action }">
        <p>不與他人比較</p>
        <p>揮灑汗水</p>
        <p>目標只有一個</p>
        <h1>"超越自我" 健身中心</h1>
      </div>
    </div>
    <div class="about-us">
      <div class="about-img">
        <img src="@/assets/imgs/about-4.jpg" alt="" />
        <img src="@/assets/imgs/about-2.jpg" alt="" />
      </div>
      <div class="about-txt">
        <h1>關於我們</h1>
        <h1>Push Yourself</h1>
        <p>
          我們是一群喜愛健身，對健康生活充滿熱情的同好。我們樂於自己烹調平日所需的餐食，可是偶爾也想忙裡偷閒。
          所以，我們開始想像，是否可以融合便利商店的優點，提供更精緻、多元且層次更豐富的餐食給消費者， 於是 Push
          Yourself 就誕生了。
        </p>
        <p>
          當您在忙碌的工作結束後，用僅剩不多的個人時間，以健身追求另一個自我實現的同時，我們不希望您為了同等重要的飲食而
          耗費大量心力，這個時候，您只需要從冰箱拿出一份 Push Yourself
          的餐食，多元的口味及完善的營養配比，絕對能滿足您的需求。
        </p>
      </div>
    </div>
    <div class="about-information">
      <div class="row-1">
        <div class="row-1-img">
          <img src="@/assets/imgs/about-3.jpg" alt="" />
        </div>
        <div class="row-1-text row-text">
          <p>會員總數已達到</p>
          <p>{{ studentNumber }}位</p>
        </div>
      </div>
      <div class="row-2">
        <div class="row-2-img">
          <img src="@/assets/imgs/about-3.jpg" alt="" />
        </div>
        <div class="row-2-text row-text">
          <p>至今我們已協助消滅掉</p>
          <p>{{ bodyNumber }}% 體脂肪</p>
        </div>
        <div class="row-2-img">
          <img src="@/assets/imgs/about-3.jpg" alt="" />
        </div>
      </div>
      <div class="row-3">
        <div class="row-3-text row-text">
          <p>我們本身熱愛運動，希望也能把這份喜愛的心情帶給你，將運動融入自己生活的一部分之中!</p>
        </div>
        <div class="row-3-img">
          <img src="@/assets/imgs/about-3.jpg" alt="" />
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import { gsap } from 'gsap/all';

export default {
  name: 'About',
  components: {
    Footer,
  },
  data() {
    return {
      action: false,
      studentTweenedNumber: 0,
      bodyTweenedNumber: 0,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 700) {
        gsap.to(this.$data, { duration: 1, studentTweenedNumber: 850 });
      }
      if (window.scrollY >= 1030) {
        gsap.to(this.$data, { duration: 1, bodyTweenedNumber: 2032.5 });
      }
      console.log(window.scrollY);
    },
  },
  computed: {
    studentNumber: function () {
      return this.studentTweenedNumber.toFixed(0);
    },
    bodyNumber: function () {
      return this.bodyTweenedNumber.toFixed(1);
    },
  },

  mounted() {
    setTimeout(() => {
      this.$store.commit('LOADING', false);
    }, 1500);
    setTimeout(() => {
      this.action = true;
    }, 1600);
  },
};
</script>
<style scoped>
.banner {
  height: 550px;
  background-image: url(@/assets/imgs/about-banner-1.jpg);
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.text {
  color: #fff;
  width: 80%;
  position: relative;
  top: 0px;
  left: 0px;
}

.text::before {
  content: '';
  /* background: #fff; */
  position: absolute;
  top: -100px;
  left: -100px;
}
.text.action::before {
  width: 80px;
  height: 80px;
  border-top: 5px solid #ca293e;
  border-left: 5px solid #ca293e;
  transition: 0.5s all linear;
  position: absolute;
  top: -20px;
  left: -20px;
}

.text::after {
  content: '';
  /* background: #fff; */
  position: absolute;
  top: 210px;
  left: 600px;
}
.text.action::after {
  width: 80px;
  height: 80px;
  border-bottom: 5px solid #ca293e;
  border-right: 5px solid #ca293e;
  transition: 0.5s all linear;
  position: absolute;
  top: 130px;
  left: 450px;
}

.text p {
  font-size: 2rem;
}
.text h1 {
  font-size: 3.5rem;
}
.text .content {
  font-size: 1.5rem;
  height: 100px;
  line-height: 100px;
  font-weight: 600;
}
.about-us {
  display: flex;
  max-width: 1400px;
  margin: 3rem auto;
}
.about-txt {
  width: 50%;
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  align-items: center;
}
.about-txt h1 {
  font-size: 2.8rem;
}
.about-txt p {
  width: 60%;
  padding: 2rem 0;
  font-weight: 600;
  font-size: 1.2rem;
}
.about-img {
  width: 50%;
  display: flex;
  /* justify-content: center; */
}

.about-img img:first-child {
  width: 55%;
  padding-right: 2%;
}
.about-img img:last-child {
  width: 45%;
  padding-left: 2%;
}
.row-1 {
  display: flex;
  height: 300px;
  max-width: 1400px;
  margin: auto;
}
.row-1-img {
  width: 70%;
  margin-right: 1%;
}
.row-1-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
}
.row-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
}

.row-1-text {
  width: 30%;
  background-color: #c73e3a;
  padding: 1rem;
  color: #fff;
  margin-left: 1%;
}
.row-2 {
  display: flex;
  height: 300px;
  max-width: 1400px;
  margin: 3rem auto;
}
.row-2-img {
  width: 33%;
}
.row-2-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
}
.row-2-text {
  width: 33%;
  background-color: #00aa90;
  padding: 1rem;
  color: #fff;
  margin: 0 2%;
}
.row-3 {
  display: flex;
  height: 300px;
  max-width: 1400px;
  margin: 3rem auto;
}
.row-3-img {
  width: 70%;
  margin-left: 1%;
}
.row-3-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
}
.row-3-text {
  width: 30%;
  background-color: #fc9f4d;
  padding: 1rem;
  color: #fff;
  margin-right: 1%;
}
</style>
