import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import {
  faShoppingCart,
  faHouse,
  faDumbbell,
  faHandBackFist,
  faStore,
  faChildReaching,
  faPhone,
  faTrashCan,
  faVolumeHigh,
  faXmark,
  faBars,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faShoppingCart,
  faHouse,
  faDumbbell,
  faHandBackFist,
  faStore,
  faChildReaching,
  faPhone,
  faTrashCan,
  faVolumeHigh,
  faXmark,
  faBars,
  faCircleInfo
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
//vue-loading-overlay
Vue.component('loading', VueLoading);
Vue.use(VueLoading, {
  canCancel: false,
  color: '#000000',
  loader: 'dots', //spinner/dots/bars
  width: 50,
  height: 50,
  backgroundColor: '#ffffff',
  isFullPage: true,
  opacity: 0.8,
}); //Use default options

Vue.config.productionTip = false;

Vue.directive('title', {
  inserted: function () {
    document.title = 'Minus C Fitness';
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
