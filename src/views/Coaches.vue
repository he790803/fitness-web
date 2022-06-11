<template>
  <div class="teachers">
    <div class="container">
      <div class="text">
        <h1>教練</h1>
        <h1>營養師</h1>
        <h1>團隊</h1>
      </div>
      <ul class="coaches">
        <li v-for="(coach, index) of coachesInformation" :key="index" :style="coachPhoto(index + 1)">
          <h1>{{ coach.job }}</h1>
          <h1>{{ coach.name }}</h1>
          <div class="content" :style="bgColor(coach.color)">
            <p v-for="(skill, index) of coach.skills" :key="index">
              {{ skill }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
  components: { Footer },
  name: 'Teachers',
  data() {
    return {
      big: true,
      coachesInformation: [
        {
          job: 'Coach',
          name: 'Mike',
          color: '#1e1d1bd5',
          skills: ['個人體適能規劃', '重量訓練', '體態評估調整', '運動表現提升', '手術後復健訓練', '核心訓練'],
        },
        {
          job: 'Coach',
          name: 'Kelly',
          color: '#d4aa8dab',
          skills: ['墊上核心訓練', '徒手協調訓練', '體態雕塑', '健康減脂訓練'],
        },
        {
          job: 'Coach',
          name: 'Kevin',
          color: '#1e1d1bd5',
          skills: ['減重與體態雕塑', '體適能訓練', '心肺耐力訓練', '增肌減脂'],
        },
        {
          job: 'Dietitian',
          name: 'Tommy',
          color: '#ea6990a6',
          skills: ['肥胖研究學會體重管理營養師', '曾任體重管理中心營養師', '曾任臺北馬偕營養師', '健檢中心諮詢營養師'],
        },
        {
          job: 'TA',
          name: 'Angel',
          color: '#e0a0969d',
          skills: ['運動按摩及放鬆', 'MCT肌筋膜按壓', '伸展/滾筒放鬆', '肌肉伸展放鬆'],
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('LOADING', false);
    }, 1500);
  },
  methods: {
    coachPhoto(index) {
      return {
        backgroundImage: `url(${require('../assets/imgs/coach-' + index + '.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      };
    },
    bgColor(color) {
      return { backgroundColor: color };
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  height: calc(100vh - 120px);
}
.text {
  width: 25%;
  /* background-color: #cca; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
}
.coaches {
  width: 75%;
  display: flex;
}

.coaches li {
  background-image: url(@/assets/imgs/about-4.jpg);
  width: 300px;
  height: 80%;

  margin: auto 20px;
  transition: width 0.5s linear, font-size 0.5s linear;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
}

.coaches li:hover {
  width: 100%;
  font-size: 2rem;
}

.coaches li .content {
  transition: height 0.5s linear;
  font-size: 1rem;
  height: 120px;
  border-radius: 0 0 15px 15px;
  height: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.coaches li:hover .content {
  height: 300px;
}
.coaches li .content p {
  width: 50%;
  padding: 1rem;
  font-size: 1.5rem;
}
@media screen and (max-width: 1600px) {
  .text {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 1200px) {
  .container {
    flex-direction: column;
    height: 100%;
    /* height: calc(100vh - 160px); */
  }
  .text {
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: row;
    font-size: 1.3rem;
    align-items: center;
  }
  .text h1 {
    margin-right: 1rem;
  }
  /* .text h1::after {
    content: '、';
  } */
  .text h1:last-child::after {
    content: '';
  }
  .coaches {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .coaches li:first-child {
    width: 100%;
    min-height: calc(100vh - 120px);
  }
  .coaches li {
    width: 100%;
    min-height: 100vh;
    margin: 1rem;
    border-radius: 0px;
  }
  .coaches li:hover {
    width: 100%;
    font-size: 1rem;
  }
  .coaches li .content {
    height: 300px;
    border-radius: 0px;
  }
}
@media screen and (max-width: 400px) {
  .coaches li {
    height: 100%;
  }
  .coaches li .content {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .coaches li .content p {
    width: auto;
  }
}
@media screen and (max-width: 340px) {
  .text h1 {
    font-size: 2rem;
  }
}
</style>
