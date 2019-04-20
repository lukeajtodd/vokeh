import 'intersection-observer';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import { auth } from './firebase';
import VeeValidate from 'vee-validate';
import VueToasted from 'vue-toasted';
import { VLazyImagePlugin } from 'v-lazy-image';
import { VueMasonryPlugin } from 'vue-masonry';
import './registerServiceWorker';

import Loader from './components/Loader';

import 'reset-css';
import 'typeface-rock-salt';
import 'typeface-poppins';
import '@/assets/styles/tailwind.css';
import '@/assets/styles/main.scss';

Vue.use(VeeValidate, {
  events: 'keyup|change',
  classes: true,
  inject: false,
  classNames: {
    invalid: 'is-invalid',
  },
});
Vue.use(VueToasted);

Vue.use(VLazyImagePlugin);
Vue.use(VueMasonryPlugin);

Vue.component('loader', Loader);

Vue.config.productionTip = false;

let app;

auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
