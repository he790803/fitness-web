<template>
  <div class="shopPage">
    <div class="banner-group">
      <div class="banner" :class="{ scroll: isScroll }">
        <ul class="banner-img-list">
          <li
            v-for="(image, index) of total"
            :key="index"
            :style="imgListA(image)"
            :class="{ animated: image - 1 === active || image - 1 === preActive }"
            ref="imgListC"
          ></li>
        </ul>
        <p class="banner-lg-content" :class="{ active: isShow }">Sports in Your Life</p>
        <p class="banner-sm-content" :class="{ active: !isShow }">超越自我 挑戰自我</p>
      </div>
    </div>

    <!-- <div class="banner">
      <div class="title">
        <p>運動課程</p>
      </div>
    </div> -->

    <div class="course-list">
      <button @click="filterCourseHandler('all')" :class="{ selected: courseType === 'all' }">所有課程</button>
      <button @click="filterCourseHandler('experience')" :class="{ selected: courseType === 'experience' }">
        體驗課程
      </button>
      <button @click="filterCourseHandler('person')" :class="{ selected: courseType === 'person' }">
        私人教練課程
      </button>
      <button @click="filterCourseHandler('team')" :class="{ selected: courseType === 'team' }">團體課程</button>
      <button @click="filterCourseHandler('diet')" :class="{ selected: courseType === 'diet' }">飲食管理課程</button>
    </div>

    <div class="card-group">
      <div class="card" v-for="(item, index) of filterCourse" :key="index">
        <router-link :to="{ name: `Product`, params: { id: `${item.id}` } }">
          <div class="card-img">
            <img :src="item.img" />
          </div>
          <div class="card-text">
            <div class="card-title">
              <p>{{ item.name }}</p>
            </div>
            <div class="card-content">
              <p>{{ item.content }}.</p>
            </div>
            <div class="card-price">
              <div class="original-price">${{ item.originalPrice }}</div>
              <div class="special-offer">${{ item.specialOffer }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- <div class="shopCar">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'shopHeader',
  data() {
    return {
      course: this.$store.state.course,
      courseType: 'all',
      isScroll: false,
      total: 4,
      animationDuration: 10,
      active: 0,
      preActive: 0,
      isShow: true,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },

  mounted() {
    document.body.style.overflow = 'hidden';
    // setTimeout(() => {
    //   this.$store.commit('LOADING', false);
    //   document.body.style.overflow = 'visible';
    // }, 1500);
    if (this.$refs.imgListC[0].style.backgroundImage) {
      this.$store.commit('LOADING', false);
      document.body.style.overflow = 'visible';
    }
    console.log(this.$refs.imgListC[0].style.backgroundImage);
    setInterval(() => {
      this.preActive = this.active;
      this.active = (this.active + 1 + this.total) % this.total;
    }, 5000);
  },
  // watch: {
  //   imgListA: {
  //     handler: function () {
  //       if (this.$refs.imgListC[0].style.backgroundImage) {
  //         this.$store.commit('LOADING', false);
  //         document.body.style.overflow = 'visible';
  //       }
  //     },
  //   },
  // },
  methods: {
    handleScroll() {
      this.isScroll = window.scrollY > 0 ? true : false;
      this.isShow = window.scrollY > 0 ? false : true;
    },
    filterCourseHandler(val) {
      this.courseType = val;
    },
    imgListA(n) {
      return {
        backgroundImage: `url(${require('../assets/imgs/shop-banner-' + n + '.jpeg')})`,
        animationDuration: `${this.animationDuration}s`,
        // animationDelay: `${((n - 1) * this.animationDuration) / 2}s`,
      };
    },
  },

  computed: {
    filterCourse() {
      if (this.courseType === 'all') {
        return this.course;
      } else if (this.courseType === 'experience') {
        return this.course.filter((item) => {
          return item.type === 'experience';
        });
      } else if (this.courseType === 'person') {
        return this.course.filter((item) => {
          return item.type === 'person';
        });
      } else if (this.courseType === 'team') {
        return this.course.filter((item) => {
          return item.type === 'team';
        });
      } else if (this.courseType === 'diet') {
        return this.course.filter((item) => {
          return item.type === 'diet';
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shopPage {
  // max-width: 1480px;
  // margin: auto;
  // display: flex;
  // flex-direction: column;
}
.banner {
  position: relative;
  height: calc(100vh - 120px);
  // background-color: deepskyblue;
}
.banner-img-list {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-color: burlywood;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}
.scroll .banner-img-list {
  width: 1400px;
  height: 300px;
}
.banner-img-list > li {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  // background-size: cover;
  background-size: 120% auto;
}
.banner-img-list > li.animated {
  animation-name: imgAnimate;
  animation-timing-function: linear;
  // animation-iteration-count: infinite;
}
.banner-group {
  position: relative;
}
.banner-lg-content,
.banner-sm-content {
  display: none;
}
.banner-lg-content.active {
  font-size: 6rem;
  color: #fff;
  position: absolute;
  top: 25%;
  left: 10%;
  display: inherit;
}
.banner-sm-content.active {
  font-size: 4rem;
  height: 100%;
  color: #000;
  // position: absolute;
  // top: 80%;
  // text-align: center;
  // left: 38%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 3rem;
}
// 舊版
// .banner {
//   // min-width: 100vw;
//   // height: 450px;
//   height: calc(100vh - 160px);
//   // background-image: url('../assets/imgs/banner1.jpg');
//   background-image: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/gpNODmnfwGZCON1f1W7dOYALSisqOCi9GprW6cWJ2iYLGrBC2oKN73ckLLbC37P9IPJ4F7SlqKaEO06zhq2Hph1ZdZfpJSeQvn7EdOKch2Il2xyQH6WcrtvrhqXTEioR.jpg');
//   background-size: 100% 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .title {
//   background-color: rgba(0, 0, 0, 0.4);
//   padding: 100px 25%;
// }
// .title p {
//   // text-align: center;
//   color: #ddd;
//   // line-height: 450px;
//   font-size: 2.2rem;
// }
// .banner img {
//   height: 100%;
//   width: 100%;
//   filter: opacity(0.9);
// }

.course-list {
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100px;
  max-width: 1000px;
  margin: auto;
  flex-wrap: wrap;
  padding: 0 1.5rem;
}
.course-list button {
  border: 2px solid #000;
  border-radius: 2rem;
  background: #fff;
  padding: 6px 14px;
  margin-right: 10px;
  margin-top: 8px;
  cursor: pointer;
  color: #000;
}
.course-list button:hover,
.course-list button.selected {
  // background: rgb(7, 182, 127);
  background: #dfba71;
  color: #fff;
  border: #dfba71 1px solid;
}
.card-group {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 400px);
  max-width: 1200px;
  margin: auto;
}
.card {
  // width: 300px;
  // height: 100%;
  margin: 20px 20px;
  border: 2px solid #ccc;
  border-radius: 1.25rem;
  // background: #f9e4b05e;
  background-color: rgba(204, 204, 204, 0.186);
}
.card a {
  display: inline-block;
  height: 100%;
}

.card img {
  vertical-align: middle;
  width: 100%;
  border-radius: 1.25rem 1.25rem 0 0;
}
.card-text {
  padding: 10px;
  // border: 2px solid #ccc;
  border-radius: 0 0 1.25rem 1.25rem;
  // background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-text .card-title p {
  font-size: 1.8rem;
  padding: 1rem 0.5rem;
  color: #000;
}
.card-text .card-content {
  min-height: 200px;
  display: flex;
  align-items: center;
}
.card-text .card-content p {
  font-size: 1rem;
  padding: 1rem 0.5rem;
  color: #000;
}
.card-price {
  display: flex;
  justify-content: space-between;
  color: #000;
  align-items: flex-end;
  height: 100%;
}
.card-price .original-price {
  text-decoration: line-through;
}
.card-price .special-offer {
  font-size: 2rem;
  color: rgba(201, 25, 25, 0.873);
}
@keyframes imgAnimate {
  0% {
    opacity: 0;
    background-size: 120% auto;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  to {
    opacity: 0;
    background-size: 100% auto;
  }
}
@keyframes imgAnimate2 {
  0% {
    opacity: 0;
    background-size: auto 120%;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  to {
    opacity: 0;
    background-size: auto 100%;
  }
}
@media screen and (orientation: portrait) {
  .banner-img-list > li {
    background-size: auto 120%;
  }
  .banner-img-list > li.animated {
    animation-name: imgAnimate2;
    animation-timing-function: linear;
    // animation-iteration-count: infinite;
  }
  .scroll .banner-img-list {
    width: 100%;
    height: 300px;
  }
}
@media screen and (orientation: landscape) {
  .banner-lg-content.active {
    color: white;
  }
  .banner-img-list > li {
    background-size: 120% auto;
  }
}

@media screen and (max-width: 830px) {
  .banner {
    height: calc(100vh - 120px);
  }
}
@media screen and(max-width:590px) {
  .course-list {
    justify-content: flex-start;
  }
  .banner-sm-content.active {
    font-size: 2rem;
  }
}
</style>
