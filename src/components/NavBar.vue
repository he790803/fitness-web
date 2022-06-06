<template>
  <div class="navBar">
    <div class="logo">
      <h1>Han-Gym</h1>
      <!-- <img src="../assets/fitnessLogo.png" alt="品牌Logo" /> -->
    </div>
    <nav>
      <ul>
        <!-- <li><router-link to="/">首頁</router-link></li>
        <li><a href="#about">關於我們</a></li>
        <li><router-link to="/shop">線上購課</router-link></li>
        <li><a href="#course">課程介紹</a></li>
        <li><a href="#teachers">師資介紹</a></li>
        <li><a href="#contact">聯絡我們</a></li> -->
        <li>
          <router-link to="/">
            <font-awesome-icon icon="fa-solid fa-house" />
            HOME
          </router-link>
        </li>
        <li>
          <a href="#about">
            <font-awesome-icon icon="fa-solid fa-hand-back-fist" />
            ABOUT
          </a>
        </li>
        <li>
          <router-link to="/shop">
            <font-awesome-icon icon="fa-solid fa-store" />
            SHOP
          </router-link>
        </li>
        <li>
          <a href="#course">
            <font-awesome-icon icon="fa-solid fa-dumbbell" />
            COURSE
          </a>
        </li>
        <li>
          <a href="#teachers">
            <font-awesome-icon icon="fa-solid fa-child-reaching" />
            TEACHERS
          </a>
        </li>
        <li>
          <a href="#contact">
            <font-awesome-icon icon="fa-solid fa-phone" />
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navBar {
  width: 28rem;
  min-height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}

.logo h1 {
  padding: 5rem 0;
  text-align: center;
  color: #fff;
  font-family: homeFont;
}

.navBar ul {
  list-style: none;
  padding: 5rem 0 0 0;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.li-icon {
  color: #fff;
  margin: 0 0 1rem 0;
}
.navBar ul a {
  font-size: 1.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
