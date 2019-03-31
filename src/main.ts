import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebase';
import VeeValidate from 'vee-validate';
import VueToasted from 'vue-toasted';
import './registerServiceWorker';

import Loader from './components/Loader.vue';

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

Vue.component('loader', Loader);

Vue.config.productionTip = false;

let app: any;

auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
