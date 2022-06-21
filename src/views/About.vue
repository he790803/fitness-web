<template>
  <div class="about">
    <div class="banner">
      <div class="text" :class="{ action: action }">
        <p>不與他人比較</p>
        <p>揮灑汗水</p>
        <p>目標只有一個</p>
        <h1>"超越自我"</h1>
      </div>
    </div>
    <div class="about-us">
      <div class="about-img">
        <img src="@/assets/imgs/about-4.jpg" alt="" />
        <img src="@/assets/imgs/about-6.jpeg" alt="" />
      </div>
      <div class="about-txt">
        <!-- <h1>Minus C - 減去您的卡路里</h1> -->
        <div class="title">
          <h1>Minus C</h1>
          <h1>減去您的卡路里</h1>
        </div>
        <p>
          健身不單單只是追求身體外在體態的表現，我們認為更重要的是釋放內在的壓力，戰勝自我的愉悅。
          <br />
          創立Minus C，初衷就是希望能把這份熱情與健康，帶進您的生活之中！
          <br />
          來到Minus
          C，不會有團隊人員為了推銷課程，去評論外在任何的不足，因為來到這，不需和誰去做比較，我們的目標只有自己，今天的我們，超越了昨天的自己。
        </p>
        <p>
          團隊不斷充實自己相關專業，並且相互配合，提供會員最合乎身體狀態的訓練以及後續調整與飲食。
          <br />
          也很用心的規畫許多不同樣式的課程，去滿足各種愛好運動的族群。
          <br />
          Minus
          C為會員提供從課前熱身，課中專業的技術指導，以及課後的放鬆與飲食規劃，以利幫助會員們在運動的道路上，減少卡路里，減少壓力，減少運動傷害發生的可能性！
        </p>
      </div>
    </div>
    <div class="about-information">
      <div class="row-1" ref="img1">
        <div class="row-1-img">
          <img src="@/assets/imgs/about-row-1.jpeg" alt="about information配圖1" />
        </div>
        <div class="row-1-text row-text">
          <p>會員總數已達到</p>
          <p>{{ studentNumber }}位</p>
        </div>
      </div>
      <div class="row-2" ref="img2">
        <div class="row-2-img">
          <img src="@/assets/imgs/about-row-2.jpeg" alt="about information配圖2" />
        </div>
        <div class="row-2-text row-text">
          <p>至今我們已協助消滅掉</p>
          <p>{{ bodyNumber }}% 體脂肪</p>
        </div>
        <div class="row-2-img right">
          <img src="@/assets/imgs/about-row-2-2.jpeg" alt="" />
        </div>
      </div>
      <div class="row-3">
        <div class="row-3-text row-text">
          <p>我們本身熱愛運動，希望也能把這份喜愛的心情帶給你，將運動融入自己生活的一部分之中!</p>
        </div>
        <div class="row-3-img">
          <img src="@/assets/imgs/about-row-3.jpeg" alt="" />
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
      aboutImgLoading: null,
      slideInAt1: 0,
      slideInAt2: 0,
      image1Bottom: 0,
      image2Bottom: 0,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // if (window.scrollY >= 700) {
      //   gsap.to(this.$data, { duration: 1, studentTweenedNumber: 850 });
      // }
      // if (window.scrollY >= 1030) {
      //   gsap.to(this.$data, { duration: 1, bodyTweenedNumber: 2032.5 });
      // }
      // 取得圖片1/2高度的定位點（卷軸垂直位移量＋視窗高度）- 1/2圖片高度
      this.slideInAt1 = window.scrollY + window.innerHeight - this.$refs.img1.clientHeight;
      this.slideInAt2 = window.scrollY + window.innerHeight - this.$refs.img2.clientHeight;
      console.log('slideInAt1:' + this.slideInAt1, 'offsetTop:' + this.$refs.img1.offsetTop);

      if (this.slideInAt1 > this.$refs.img1.offsetTop) {
        gsap.to(this.$data, { duration: 1, studentTweenedNumber: 850 });
      }
      if (this.slideInAt2 > this.$refs.img2.offsetTop) {
        // if (window.pageYOffset + this.$refs.img2.clientHeight + 300 >= this.$refs.img2.offsetTop) {
        gsap.to(this.$data, { duration: 1, bodyTweenedNumber: 2032.5 });
      }
      console.log(this.$refs.img1.offsetTop, window.pageYOffset);
      // console.log(window.scrollY);
      // console.log(`IMG:${this.$refs.img2.offsetTop}`);
      // console.log(`WINDOW:${window.pageYOffset}`);
      // console.log(`${this.$refs.img2.clientHeight}`);
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
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    // setTimeout(() => {
    //   this.$store.commit('LOADING', false);
    // }, 1500);
    this.aboutImgLoading = new Image();
    this.aboutImgLoading.src = require('../assets/imgs/shop-banner-1.jpeg');
    this.aboutImgLoading.addEventListener('load', () => {
      this.$store.commit('LOADING', false);
      document.body.style.overflowY = 'visible';
      this.action = true;
    });
    // setTimeout(() => {
    //   this.action = true;
    // }, 1600);
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
  top: -10rem;
  left: -10rem;
}
.text.action::before {
  width: 80px;
  height: 80px;
  border-top: 5px solid #ca293e;
  border-left: 5px solid #ca293e;
  transition: 0.5s all linear;
  position: absolute;
  top: -1rem;
  left: -2rem;
}

.text::after {
  content: '';
  /* background: #fff; */
  position: absolute;
  top: 30rem;
  left: 50rem;
}
.text.action::after {
  width: 80px;
  height: 80px;
  border-bottom: 5px solid #ca293e;
  border-right: 5px solid #ca293e;
  transition: 0.5s all linear;
  position: absolute;
  top: 10rem;
  left: 14rem;
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
  justify-content: center;
  /* padding-top: 2rem; */
  flex-direction: column;
  align-items: center;
}
.about-txt .title {
  display: flex;
  align-items: center;
  /* margin-top: 2rem; */
}
.about-txt h1:first-child {
  margin-right: 2rem;
}
.about-txt h1 {
  font-size: 2.8rem;
}
.about-txt p {
  width: 100%;
  padding: 1rem 0rem 1rem 2rem;
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
.row-2-img.right img {
  object-position: 100% 80%;
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
@media screen and (max-width: 1170px) {
  .about-txt .title {
    flex-direction: column;
  }
  .about-txt h1:first-child {
    margin-right: 0rem;
  }
}

@media screen and (max-width: 1000px) {
  .about-txt p {
    font-size: 1rem;
    display: block;
  }
}
@media screen and (max-width: 830px) {
  .about-txt .title {
    margin-top: 2rem;
  }
  .text > h1 {
    font-size: 2.2rem;
  }
  .text::after {
    top: 6.5rem;
    left: -17rem;
  }
  .text.action::after {
    top: 8rem;
    left: 9rem;
  }
  .about-us {
    flex-direction: column;
  }
  .about-img,
  .about-txt {
    width: 100%;
  }
  .about-txt p {
    font-size: 1.2rem;
    padding: 2rem;
  }
  .row-1,
  .row-2,
  .row-3 {
    height: 100%;
    flex-wrap: wrap;
  }
  .row-1-img,
  .row-1-text,
  .row-2-img,
  .row-2-text,
  .row-3-img,
  .row-3-text {
    width: 100%;
    margin: 0;
  }
  .row-1,
  .row-2,
  .row-3 {
    min-height: 400px;
  }
  .row-2-img:last-child {
    display: none;
  }
  .row-3-text {
    order: 2;
  }

  @media screen and (max-width: 409px) {
    .text.action::before,
    .text.action::after {
      display: none;
    }
    .row-1,
    .row-2,
    .row-3 {
      min-height: auto;
    }
  }
}
</style>
