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
        @click.prevent="swapView('FORGOT')"
      >
        Forgot Password
      </a>
      <a
        href="#"
        @click.prevent="swapView('SIGNUP')"
      >
        Create an Account
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Input from '@/components/Input.vue';
import UpdateState from '@/mixins/updateState';
import HandleError from '@/mixins/handleError';

export default {
  inject: ['$validator'],
  mixins: [UpdateState, HandleError],
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  props: {
    swapView: {
      type: Function,
      required: true
    }
  },
  methods: {
    ...mapActions('Auth', ['login']),
    async onSubmit() {
      const result = await this.$validator.validate();
      if (result) {
        const err = this.login({ email: this.email, password: this.password });
        this.handleError(err);
      }
    }
  },
  components: {
    Input
  }
}
</script>
