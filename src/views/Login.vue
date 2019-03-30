<template>
  <div id="login">
    <p>Welcome back, get signed in!</p>
    <form @submit.prevent="onSubmit" novalidate>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email" 
          name="email"
          type="email"
          placeholder="you@youremail.com"
          v-model.trim="email"
          v-validate="'required|email'"
          required
        />
        <span>{{ errors.first('email') }}</span>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          v-model.trim="password"
          v-validate="'required|password'"
          required
        />
        <span>{{ errors.first('password') }}</span>
      </div>
      <button type="submit" class="btn">Log In</button>
    </form>
    <div class="swaps">
      <a href="#" @click.prevent="swapView('ForgotPassword')">Forgot Password</a>
      <a href="#" @click.prevent="swapView('Signup')">Create an Account</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

enum Mode {
  Login = 'Login',
  Signup = 'Signup',
  Forgot = 'ForgotPassword',
}

@Component({
  methods: mapActions(['login']),
  inject: ['$validator'],
})
export default class Login extends Vue {
  // For Vuex
  private login: any;

  @Prop(Function) private readonly swapView!: (mode: Mode) => void;

  private email: string = '';
  private password: string = '';

  private async onSubmit(): Promise<void> {
    const result = await this.$validator.validate();
    if (result) {
      this.login({ email: this.email, password: this.password });
    }
  }
}
</script>
