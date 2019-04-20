<template>
  <div id="forgot_password" class="page__inner">
    <p class="intro">
      Reset your password. An email will be sent to complete the reset.
    </p>
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
      <a class="link mr-4" href="#" @click.prevent="swapView('SIGNUP')">
        Create an Account
      </a>
      <a class="link" href="#" @click.prevent="swapView('LOGIN')">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

import { Mode } from '@/models/Mode';

import Input from '@/components/Input.vue';
import UpdateState from '@/mixins/updateState';
import HandleError from '@/mixins/handleError';

export default {
  inject: ['$validator'],
  mixins: [UpdateState, HandleError],
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
    };
  },
  props: {
    swapView: {
      type: Function,
      required: true,
    },
  },
  methods: {
    ...mapActions('Auth', ['resetPassword']),
    ...mapMutations(['loading']),
    async onSubmit() {
      const result = await this.$validator.validate();
      if (result) {
        const err = this.resetPassword(this.email);
        this.handleError(err).then((response) => {
          if (response) {
            this.swapView(Mode.LOGIN);
          }
          this.loading(false);
        });
      }
    },
  },
  components: { Input },
};
</script>
