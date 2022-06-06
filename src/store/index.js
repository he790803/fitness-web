import Vue from 'vue';
import Vuex from 'vuex';
import SessionStorage from '../modules/SessionStorage';
Vue.use(Vuex);

const STORE = new SessionStorage('shopping-item');
const SHOPPING = new SessionStorage('shopping-list');

export default new Vuex.Store({
  state: {
    loading: true,
    course: [
      {
        id: 'E01',
        type: 'experience',
        name: '體驗課程',
        originalPrice: 1100,
        specialOffer: 0,
        content: '從課前拉伸到課後肌肉放鬆，體驗1對1教練完整課程，此次體驗，完全免費。',
        time: '1.5小時',
        img: require('../assets/imgs/cardImg5.jpg'),
      },
      {
        id: 'P01',
        type: 'person',
        name: '1對1教練課',
        originalPrice: 1100,
        specialOffer: 950,
        content: '為 1 對 1的教學課程，從身體評估、目標了解到操作器械以達到鍛鍊效果。',
        time: '2小時',
        img: require('../assets/imgs/cardImg1.jpg'),
      },
      {
        id: 'T01',
        type: 'team',
        name: '團體教練課 5人',
        originalPrice: 900,
        specialOffer: 750,
        content:
          '動物三年戀愛方便危機疾病污染一面放下地理市政府，參數色彩，走到加盟表演意大利，學院供應商絶對呼吸零售影視我這，意大利增強玻璃新增高雄藍色，意味着招標看法資源位元這個部分全部執行環境才會，也要證券百度你沒有認識經過只要窗口一步成績點這裡會議工作，研究生依法。',
        time: '1.5小時',
        img: require('../assets/imgs/cardImg2.jpg'),
      },
      {
        id: 'T02',
        type: 'team',
        name: '團體教練課 10人',
        originalPrice: 800,
        specialOffer: 700,
        content:
          '此課程具有高強度低衝擊的運動特性，透過階梯踏板不同的變換使用可鍛鍊到全身，加上適當的音樂節奏、踏板高度的不同而有其不同的運動強度。除了訓練我們的心肺功能，同時也可以強化肌力。',
        time: '1.5小時',
        img: require('../assets/imgs/cardImg3.jpg'),
      },
      {
        id: 'T03',
        type: 'team',
        name: '戰鬥有氧 10人',
        originalPrice: 800,
        specialOffer: 700,
        content: '屬於高強度的有氧運動，結合各項武術動作如泰拳、空手道、跆拳道及太極拳等，充滿活力的燃燒熱量。',
        time: '1.5小時',
        img: require('../assets/imgs/cardImg4.jpeg'),
      },
      {
        id: 'D01',
        type: 'diet',
        name: '飲食管理',
        originalPrice: 3600,
        specialOffer: 2200,
        content:
          '由專業的營養師量身打造屬於你的飲食菜單，藉由會員回傳每日三餐後，給予專業的建議。三分動，七分吃，讓我們的身體由內而外更加健康!',
        time: '1個月',
        img: require('../assets/imgs/cardImg6.jpg'),
      },
    ],
    shoppingCart: [],
    shoppingList: [],
    step2: false,
  },
  mutations: {
    SET_SHOPPING_CART_ITEM(state, shoppingItems) {
      state.shoppingCart = shoppingItems;
    },
    SET_SHOPPING_LIST(state, shopping) {
      console.log(shopping);
      state.shoppingList = shopping;
    },
    COMPLETE(state) {
      state.shoppingCart = [];
      state.shoppingList = [];
    },
    PRODUCT_NUM_CONTROL(state, [item, num]) {
      state.shoppingCart.forEach((product) => {
        if (product.name === item.name) {
          // console.log(product.num, num);
          product.num += num;
        }
      });
    },
    LOADING(state, val) {
      state.loading = val;
    },
  },
  actions: {
    // READ_ITEM({ commit }) {},
    READ_SHOPPING_CART({ commit }) {
      // 1. GET (串API撈資料)
      const shoppingItems = STORE.load();
      // 2. commit mutation
      commit('SET_SHOPPING_CART_ITEM', shoppingItems);
      // 3. return
      return { shoppingItems };
    },
    ADD_ITEM_TO_SHOPPING_CART({ commit }, { id, name, num, price, totalPrice, img }) {
      // ADD_ITEM_TO_SHOPPING_CART({ commit }, item) {
      // 1. POST (串API撈資料)
      const shoppingItems = STORE.load();
      shoppingItems.push({ id, name, num, price, totalPrice, img });
      // shoppingItems.push(item);

      STORE.save(shoppingItems);
      // 2. commit mutation
      commit('SET_SHOPPING_CART_ITEM', shoppingItems);
      // 3. return
      return {
        itemId: new Date(),
        // item,
        name,
        num,
        totalPrice,
      };
    },
    READ_LIST({ commit }) {
      // 1. GET (串API撈資料)
      const shoppingItems = SHOPPING.load();
      // 2. commit mutation
      commit('SET_SHOPPING_LIST', shoppingItems);
      // 3. return
      return { shoppingItems };
    },
    // UPDATE_SHOPPING_CART({ commit }, { name, Email, cellphone, address, payMethod, remark }) {
    UPDATE_SHOPPING_CART({ commit }, item) {
      // const shopping = SHOPPING.load();
      // shopping.push({ name, Email, cellphone, address, payMethod, remark });
      // shopping.push(item);

      // SHOPPING.save(item);
      console.log(123);
      commit('SET_SHOPPING_LIST', item);
    },
    REMOVE_SHOPPING_CART_ITEM({ commit }, item) {
      const shoppingItems = STORE.load();
      let shoppingCart = shoppingItems.filter((cartItem) => {
        return cartItem.id !== item.id;
      });
      STORE.save(shoppingCart);
      commit('SET_SHOPPING_CART_ITEM', shoppingCart);
    },
    CLASS_CONTROL({ commit }, [item, num]) {
      const shoppingItems = STORE.load();
      shoppingItems.forEach((product) => {
        if (product.name === item.name) {
          product.num += num;
        }
      });
      STORE.save(shoppingItems);
      commit('PRODUCT_NUM_CONTROL', [item, num]);
    },
    AAA({ state, commit }) {
      let list = SHOPPING.load();
      let item = state.shoppingList;
      list.push(item);
      SHOPPING.save(list);
      STORE.save([]);
      commit('COMPLETE');
    },
  },
  modules: {},
});
