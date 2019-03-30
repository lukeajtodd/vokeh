import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { auth, users } from '@/firebase';
import router from '@/router';
import firebase from 'firebase';

interface Credentials {
  email: string;
  password: string;
}

@Module
export default class Auth extends VuexModule {
  private currentUser?: firebase.User;
  private userProfile = {};

  @Action
  public async login(data: Credentials) {
    const { email, password } = data;
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      this.context.commit('setCurrentUser', user.user);
      this.context.dispatch('fetchUserProfile');
      router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }

  @Action
  public async fetchUserProfile() {
    if (this.currentUser) {
      try {
        const res = await users.doc(this.currentUser.uid).get();
        this.context.commit('setUserProfile', res.data());
      } catch (err) {
        console.log(err);
      }
    }
  }

  @Mutation
  private setCurrentUser(user: firebase.User) {
    this.currentUser = user;
  }

  @Mutation
  private setUserProfile(payload: any) {
    this.userProfile = payload;
  }
}
