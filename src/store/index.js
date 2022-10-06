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
        content:
          '為 1 對 1的教學課程，從身體評估，了解學員目標，並規劃。 課程包含，課前熱身，課中量身制訂的課表，課後肌肉放鬆與飲食建議。',
        time: '2小時',
        img: require('../assets/imgs/cardImg1.jpg'),
      },
      {
        id: 'T01',
        type: 'team',
        name: '團體教練課 5人',
        originalPrice: 900,
        specialOffer: 750,
        content: '為 1 對 5的教學課程，包含課前熱身，帶領學員器材操作指導。',
        time: '1.5小時',
        img: require('../assets/imgs/cardImg2.jpg'),
      },
      {
        id: 'T02',
        type: 'team',
        name: '團體教練課 10人',
        originalPrice: 800,
        specialOffer: 700,
        content: '為 1 對 10的教學課程，給予學員相關技術指導，運動心態的建立與調整，讓我們慢慢愛上運動。',
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
    hintShow: false,
  },
  // 透過mutations更新state
  mutations: {
    // 加入購物車
    SET_SHOPPING_CART_ITEM(state, shoppingItems) {
      state.shoppingCart = shoppingItems;
    },
    // 把購物車商品加入購物清單
    SET_SHOPPING_LIST(state, shopping) {
      console.log('SHOPPING_LIST:' + shopping);
      state.shoppingList = shopping;
    },
    // 清空購物車與完成清單
    COMPLETE(state) {
      state.shoppingCart = [];
      state.shoppingList = [];
    },
    // 增減產品數量
    PRODUCT_NUM_CONTROL(state, [item, num]) {
      state.shoppingCart.forEach((product) => {
        if (product.name === item.name) {
          // console.log(product.num, num);
          product.num += num;
        }
      });
    },
    // Loading
    LOADING(state, val) {
      state.loading = val;
    },
    // 加入購物車訊息顯示/隱藏
    SHOPPING_CART_HINT(state, val) {
      state.hintShow = val;
    },
  },
  actions: {
    // 顯示購物車商品
    READ_SHOPPING_CART({ commit }) {
      // 1. GET (串API撈資料)
      // 讀取SessionStorage
      const shoppingItems = STORE.load();
      // 2. commit mutation

      commit('SET_SHOPPING_CART_ITEM', shoppingItems);
      // 3. return
      return { shoppingItems };
    },

    // 加入購物車
    ADD_ITEM_TO_SHOPPING_CART({ commit }, { id, name, num, price, totalPrice, img }) {
      // 1. POST (串API撈資料)
      // 讀取SessionStorage
      const shoppingItems = STORE.load();
      shoppingItems.push({ id, name, num, price, totalPrice, img });
      // shoppingItems.push(item);
      // 存進SessionStorage
      STORE.save(shoppingItems);
      // 2. commit mutation
      //存進store.state
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

    READ_LIST({ state, commit }) {
      // 1. GET (串API撈資料)
      // const shoppingItems = SHOPPING.load();
      const shoppingItems = state.shoppingList;
      // 2. commit mutation
      commit('SET_SHOPPING_LIST', shoppingItems);
      // 3. return
      return { shoppingItems };
    },

    UPDATE_SHOPPING_CART({ commit }, item) {
      // console.log('UPDATE_SHOPPING_CART:' + item);
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
    COMPLETE_LIST({ state, commit }) {
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
