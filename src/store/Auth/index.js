import { auth, users } from '@/firebase';
import router from '@/router';
import firebase from 'firebase';

export default {
  namespaced: true,
  state: {
    currentUser: firebase.User,
    userProfile: {},
  },
  actions: {
    async login(ctx, data) {
      const { email, password } = data;
      try {
        ctx.commit('loading', true, { root: true });
        const user = await auth.signInWithEmailAndPassword(email, password);
        ctx.commit('setCurrentUser', user.user);
        ctx.dispatch('fetchUserProfile');
        router.push('/dashboard');
      } catch (err) {
        ctx.commit('loading', false, { root: true });
        return err;
      }
    },
    async logout(ctx) {
      console.log('logout');
      try {
        await auth.signOut();
        ctx.dispatch('clearData');
        router.replace('/');
      } catch (err) {
        return err;
      }
    },
    async signup(ctx, data) {
      const { name, email, password } = data;
      try {
        ctx.commit('loading', true, { root: true });
        const user = await auth.createUserWithEmailAndPassword(email, password);
        ctx.commit('setCurrentUser', user.user);
        await ctx.dispatch('addUserToCollection', {
          user: user.user,
          name,
        });
        ctx.dispatch('fetchUserProfile');
        router.push('/dashboard');
      } catch (err) {
        ctx.commit('loading', false, { root: true });
        return err;
      }
    },
    async resetPassword(ctx, email) {
      try {
        ctx.commit('loading', true, { root: true });
        await auth.sendPasswordResetEmail(email);
        return true;
      } catch (err) {
        ctx.commit('loading', false, { root: true });
        return err;
      }
    },
    async fetchUserProfile(ctx) {
      if (ctx.state.currentUser) {
        const res = await users.doc(ctx.state.currentUser.uid).get();
        ctx.commit('setUserProfile', res.data());
      }
    },
    async addUserToCollection(ctx, { user, name }) {
      return users.doc(user.uid).set({
        name,
      });
    },
    clearData(ctx) {
      ctx.commit('setCurrentUser', null);
      ctx.commit('setUserProfile', null);
    },
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = { ...state.currentUser, ...user };
    },
    setUserProfile(state, payload) {
      state.userProfile = { ...state.userProfile, ...payload };
    },
  },
};
