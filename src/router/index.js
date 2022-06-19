import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Shop from '../views/Shop.vue';
import Coaches from '../views/Coaches.vue';
import Product from '../views/Product.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import ErrorPage from '../views/ErrorPage.vue';
import ShopPage from '../components/ShopPage.vue';
import ShoppingCartInformation from '../components/ShoppingCartInformation.vue';
import CheckoutView from '../components/CheckoutView.vue';
import CompletePage from '../components/CompletePage.vue';
import ProductInformation from '../components/ProductInformation.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      shop: true,
      page: 'home',
      loading: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      page: 'about',
      loading: true,
    },
  },
  {
    path: '/coaches',
    name: 'Coaches',
    component: Coaches,
    meta: {
      page: 'coaches',
      loading: true,
    },
  },
  {
    path: '/shop',
    // name: 'Shop',
    components: {
      default: Shop,
    },
    meta: {
      shop: true,
    },
    children: [
      {
        path: '/',
        name: 'ShopPage',
        meta: {
          shop: true,
          page: 'shop',
        },
        components: {
          default: ShopPage,
        },
      },
      {
        path: 'product/:id',
        name: 'Product',
        components: {
          default: ProductInformation,
        },
        meta: {
          shop: true,
          page: 'shop',
        },
        beforeEnter(to, from, next) {
          document.body.scrollTop = 0;
          next();
        },
      },
    ],
  },
  // {
  //   path: '/product/:id',
  //   name: 'Product',
  //   components: {
  //     default: Product,
  //   },
  //   meta: {
  //     shop: true,
  //   },
  // },
  {
    path: '/shopping-cart',
    // name: 'ShoppingCart',
    components: {
      default: ShoppingCart,
    },
    meta: {
      shop: true,
      page: 'shop',
    },
    // beforeEnter(to, from, next) {
    //   from.meta.step2 = false;
    //   from.meta.step3 = false;
    //   console.log('from' + from.meta.step2);

    //   next();
    // },
    children: [
      {
        path: '/',
        name: 'ShoppingCartInformation',
        components: {
          default: ShoppingCartInformation,
        },
        meta: {
          shop: true,
          page: 'shop',
        },
      },
      {
        path: 'checkout',
        name: 'CheckoutView',
        components: {
          default: CheckoutView,
        },
        meta: {
          step2: false,
          step3: false,
          shop: true,
          page: 'shop',
        },
        beforeEnter(to, from, next) {
          to.meta.step2 = true;
          next();
        },
      },
      {
        path: 'complete',
        name: 'CompletePage',
        components: {
          default: CompletePage,
        },
        meta: {
          step2: false,
          step3: false,
          shop: true,
          page: 'shop',
        },
        beforeEnter(to, from, next) {
          to.meta.step2 = true;
          to.meta.step3 = true;
          next();
        },
      },
    ],
  },
  {
    path: '*',
    redirect: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth' };
  },
});

export default router;
