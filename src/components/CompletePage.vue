<template>
  <div class="shoppingCartInformation">
    <div class="order-group">
      <div class="order-list">
        <h1>結帳完成</h1>
      </div>
    </div>
    <div class="content">
      <h1>感謝您的購買!</h1>
      <p>我們將於 1~3 個工作天內與您聯繫，若有任何問題也可撥打 02-3456-7890 聯繫我們。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shoppingCartInformation',
  mounted() {
    setTimeout(() => {
      this.$store.commit('LOADING', false);
    }, 1500);
  },
};
</script>

<style scoped lang="scss">
.shoppingCartInformation {
  max-width: 1180px;
  margin: 0rem auto;
  padding: 0 2rem;
  height: calc(100vh - 385px);
}
.order-group {
  display: flex;
  justify-content: space-between;
  text-align: left;
  border-bottom: 1px solid;
  border-top: 1px solid;
  padding: 15px 12px;
}
.order-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  border: 3px #274555 solid;
  padding: 150px 40px;
  text-align: center;
  color: #274555;
  margin-top: 2rem;
  margin-bottom: 4.1rem;
}
@media screen and (max-width: 780px) {
  .shoppingCartInformation {
    height: 100%;
  }
  .content {
    margin-bottom: 5.3rem;
  }
}
</style>
