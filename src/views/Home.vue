<template>
  <main id="home" class="container min-h-screen flex justify-center items-center mx-auto">
    <section class="home page">
      <h1 class="logo">
        <span>V</span>
        <span>okeh</span>
      </h1>
      <loader v-show="isLoading"/>
      <component
        :is="currentView"
        :swapView="swapView"
        :key="currentView"
        v-show="!isLoading"
      />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

import Login from './Login.vue';
import Signup from './Signup.vue';
import ForgotPassword from './ForgotPassword.vue';

enum Mode {
  Login = 'Login',
  Signup = 'Signup',
  Forgot = 'ForgotPassword',
}

@Component({
  computed: mapState(['isLoading']),
  components: { Login, Signup, ForgotPassword },
})
export default class Home extends Vue {
  private currentView: Mode = Mode.Login;
  private email: string = '';
  private password: string = '';

  private swapView(mode: Mode): void {
    this.currentView = mode;
  }
}
</script>
