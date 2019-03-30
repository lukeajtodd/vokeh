<template>
  <div id="home">
    <section>
      <h1>Vokeh</h1>
      <component :is="currentView" :swapView="swapView"/>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

import Login from './Login.vue';
import Signup from './Signup.vue';

enum Mode {
    Login = 'Login',
    Signup = 'Signup',
    Forgot = 'ForgotPassword',
}

@Component({
    methods: mapActions(['login']),
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
