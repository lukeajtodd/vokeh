<template>
  <div id="forgot_password" class="page__inner">
    <p class="intro">Reset your password. An email will be sent to complete the reset.</p>
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
      <button type="submit" class="block mx-auto">Reset</button>
    </form>
    <div class="swaps">
      <a
        class="mr-4"
        href="#"
        @click.prevent="swapView('Signup')"
      >
        Create an Account
      </a>
      <a
        href="#"
        @click.prevent="swapView('Login')"
      >
        Login
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Mixins } from 'vue-property-decorator';
import { mapActions, mapMutations } from 'vuex';

import Input from '@/components/Input.vue';
import UpdateState from '@/mixins/updateState';
import HandleError from '@/mixins/handleError';

enum Mode {
  Login = 'Login',
  Signup = 'Signup',
  Forgot = 'ForgotPassword',
}

@Component({
  methods: {
    ...mapActions(['resetPassword']),
    ...mapMutations(['loading']),
  },
  components: { Input },
  inject: ['$validator'],
})
export default class ForgotPassword extends Mixins(UpdateState, HandleError) {
  // For Vuex
  private resetPassword: any;
  private loading: any;

  @Prop(Function) private readonly swapView!: (mode: Mode) => void;

  private email: string = '';

  private async onSubmit(): Promise<void> {
    const result = await this.$validator.validate();
    if (result) {
      const err = this.resetPassword(this.email);
      this.handleError(err).then((response: boolean) => {
        // Meaning no errors
        if (response) {
          this.swapView(Mode.Login);
        }
        this.loading(false);
      });
    }
  }
}
</script>
