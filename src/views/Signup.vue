<template>
  <div id="signup">
    <p>Welcome! Sign up to the world's leading photo sharing social network right here:</p>
    <form @submit.prevent="onSubmit" novalidate>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text" 
          v-model.trim="name"
          v-validate="'required'"
          required
        />
        <span>{{ errors.first('name') }}</span>
      </div>
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
          v-validate="'required'"
          required
        />
        <span>{{ errors.first('password') }}</span>
      </div>
      <button type="submit" class="btn">Sign Up</button>
    </form>
    <div class="swaps">
      <a href="#" @click.prevent="swapView('ForgotPassword')">Forgot Password</a>
      <a href="#" @click.prevent="swapView('Login')">Login</a>
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
  methods: mapActions(['signup']),
  inject: ['$validator'],
})
export default class Signup extends Vue {
  // For Vuex
  private signup: any;

  @Prop(Function) private readonly swapView!: (mode: Mode) => void;

  private name: string = '';
  private email: string = '';
  private password: string = '';

  private async onSubmit(): Promise<void> {
    const result = await this.$validator.validate();
    if (result) {
      this.signup({
        name: this.name,
        email: this.email,
        password: this.password,
      });
      this.resetFields();
    }
  }

  private resetFields(): void {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
</script>
