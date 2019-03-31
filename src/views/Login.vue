<template>
  <div id="login" class="page__inner">
    <p class="intro">Welcome back, get signed in!</p>
    <form @submit.prevent="onSubmit" novalidate>
      <div class="form-group">
        <label for="email">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@youremail.com"
          validationRules="required|email"
          :isRequired="true"
          @changed="updateState"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <Input
          id="password"
          name="password"
          type="password"
          validationRules="required"
          :isRequired="true"
          @changed="updateState"
        />
      </div>
      <button type="submit" class="block mx-auto">Log In</button>
    </form>
    <div class="swaps">
      <a
        class="mr-4"
        href="#"
        @click.prevent="swapView('ForgotPassword')"
      >
        Forgot Password
      </a>
      <a
        href="#"
        @click.prevent="swapView('Signup')"
      >
        Create an Account
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Mixins } from 'vue-property-decorator';
import { mapActions } from 'vuex';

import Input from '@/components/Input.vue';
import UpdateState from '@/mixins/updateState';
import HandleError from '@/mixins/handleError';

enum Mode {
  Login = 'Login',
  Signup = 'Signup',
  Forgot = 'ForgotPassword',
}

@Component({
  methods: mapActions(['login']),
  components: { Input },
  inject: ['$validator'],
})
export default class Login extends Mixins(UpdateState, HandleError) {
  // For Vuex
  private login: any;

  @Prop(Function) private readonly swapView!: (mode: Mode) => void;

  private email: string = '';
  private password: string = '';

  private async onSubmit(): Promise<void> {
    const result = await this.$validator.validate();
    if (result) {
      const err = this.login({ email: this.email, password: this.password });
      this.handleError(err);
    }
  }
}
</script>
