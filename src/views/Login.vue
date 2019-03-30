<template>
  <div id="login">
    <section>
      <h1>Vokeh</h1>
      <p>Welcome! Sign up to the world's leading photo sharing social network right here:</p>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model.trim="email" type="email" placeholder="you@youremail.com" id="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model.trim="password" type="password" id="password" />
        </div>
          <button type="submit" class="btn">Log In</button>

          <div class="swaps">
            <a href="#">Forgot Password</a>
            <a href="#" @click="swapMode('SIGNUP')">Create an Account</a>
          </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

enum Mode {
    Login = 'LOGIN',
    Signup = 'SIGNUP',
    Forgot = 'FORGOT',
}

@Component({
    methods: mapActions(['login']),
})
export default class Login extends Vue {
    // For Vuex
    private login: any;

    private mode: Mode = Mode.Login;
    private email: string = '';
    private password: string = '';

    private onSubmit(): void {
        this.login({ email: this.email, password: this.password });
    }

    private swapMode(mode: Mode): void {
        this.mode = mode;
    }
}
</script>
