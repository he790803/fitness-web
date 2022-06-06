<template>
  <div class="product">
    <div class="product-team">
      <div class="product-group">
        <div class="product-img">
          <img src="https://picsum.photos/300/200/?random=5" />
        </div>
        <div class="product-txt">
          <div class="product-title">
            <h1>飲食調整</h1>
          </div>
          <div class="product-price">
            <span class="special">$350</span>
            <span class="basic">$650</span>
          </div>
          <div class="product-content">
            <p>
              本課程適合所有人，一開始會先講解飲食的基礎知識，之後再針對學員不同的目標而建議不同的飲食方式(例如運動員的蛋白質攝取量就比一般大眾來得多)。操作飲食調整的途中會不斷比對先前跟現在的狀況，並持續追蹤以達到飲食控制的最大效益。
            </p>
          </div>
          <div class="product-num">
            <p>課程數量:</p>
            <select name="classNum">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div class="product-btn">
            <router-link to="/shop" tag="button">回到商店</router-link>
            <!-- <button>回到商店</button> -->
            <button>加入購物車</button>
          </div>
        </div>
      </div>
      <div class="precautions">
        <h1>注意事項</h1>
        <p>1. 購課後我們將於 1~3 個工作天跟您聯繫，若有任何問題也歡迎撥打 02-3456-7890。</p>
        <p>2. 我們的教練都有經過嚴格篩選，並且教育不得強迫推銷課程。</p>
        <p>3. 上課時，記得自備水壺跟毛巾，並著裝適合運動的服裝、鞋子。</p>
        <p>4. 疫情期間入館內皆須量體溫，我們也會頻繁實施館內消毒清潔。</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.product-team {
  display: flex;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
}
.product-group {
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 2rem 0 6rem 0;
  // max-width: 1200px;
}
.product-img {
  width: 48%;
  max-height: 450px;
  padding-right: 2%;
  // background: #aed;
}
.product-img img {
  width: 100%;
  height: 100%;
}
.product-txt {
  width: 48%;
  padding-left: 2%;
  max-height: 450px;
  // background: #fae;
}
.product-price {
  padding: 1.2rem 0 0.5rem 0;
}
.product-price .special {
  font-size: 1.8rem;
  padding-right: 0.5rem;
}
.product-price .basic {
  font-size: 1rem;
  text-decoration: line-through;
  padding-left: 0.5rem;
  color: #aaa;
}
.product-content {
  line-height: 25px;
  padding: 1rem 0;
}
.product-num select {
  width: 100%;
  height: 40px;
  padding: 12px 14px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #ccc;
}
.product-num select option {
  border: 1px solid #e2eded;
  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
}
.product-btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}
.product-btn button {
  background: #fff;
  border: 1px solid rgb(120, 220, 188);
  border-radius: 0.25rem;
  width: 120px;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  color: rgb(120, 220, 188);
  font-weight: 600;
}
.product-btn button:hover {
  color: #fff;
  background-color: rgb(120, 220, 188);
}
.product-btn button:first-child {
  margin-right: 1.2rem;
}
.precautions {
  border-top: 2px solid rgb(120, 220, 188);
  border-bottom: 2px solid rgb(120, 220, 188);
  padding: 1rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.precautions p {
  padding: 1rem;
}
</style>
