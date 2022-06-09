<template>
  <div class="footer">
    <div class="footer-text">
      <p>Copyright &copy 2022 Push yourself Fitness All Rights Reserved.|</p>
      <p>僅個人學習，無任何商業用途</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-text {
  margin-top: 1rem;
  color: #fff;
  height: 120px;
  // background-color: rgb(120, 220, 188);
  background-color: #dac9a6;
  background-image: url('../assets/imgs/texture.png');
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
}
@media screen and (max-width: 830px) {
  .footer-text {
    flex-direction: column;
  }
}
</style>
