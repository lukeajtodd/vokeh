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

<script>
import { mapState } from 'vuex';

import { Mode } from '@/models/Mode';

import Login from './Login.vue';
import Signup from './Signup.vue';
import ForgotPassword from './ForgotPassword.vue';

export default {
  name: 'Home',
  data() {
    return {
      currentView: Mode.LOGIN
    }
  },
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    swapView(mode) {
      this.currentView = Mode[mode];
    }
  },
  components: { Login, Signup, ForgotPassword }
}
</script>
