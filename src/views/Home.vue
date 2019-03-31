<template>
  <main id="home" class="container min-h-screen flex justify-center items-center mx-auto">
    <section class="home page">
      <h1 class="logo">
        <span>V</span>
        <span>okeh</span>
      </h1>
      <loader v-if="isLoading"/>
      <component
        :is="currentView"
        :swapView="swapView"
        v-else
      />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';

import Login from './Login.vue';
import Signup from './Signup.vue';

enum Mode {
  Login = 'Login',
  Signup = 'Signup',
  Forgot = 'ForgotPassword',
}

@Component({
  methods: mapActions(['login']),
  computed: mapState(['isLoading']),
  components: { Login, Signup },
})
export default class Home extends Vue {
  // For Vuex
  private login: any;

  private currentView: Mode = Mode.Login;
  private email: string = '';
  private password: string = '';

  private onSubmit(): void {
    this.login({ email: this.email, password: this.password });
  }

  private swapView(mode: Mode): void {
    this.currentView = mode;
  }
}
</script>
