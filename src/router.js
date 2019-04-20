import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from './views/Home';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/feed',
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/feed',
      name: 'Feed',
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import(/* webpackChunkName: "dashboard" */ './views/Feed.vue'),
    },
    {
      path: '/settings',
      name: 'Settings',
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import(/* webpackChunkName: "settings" */ './views/Settings.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
