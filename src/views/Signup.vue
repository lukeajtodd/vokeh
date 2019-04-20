<template>
  <div id="signup" class="page__inner">
    <p class="intro">Welcome! Sign up to the world's leading photo sharing social network right here:</p>
    <form @submit.prevent="onSubmit" novalidate>
      <div class="form-group">
        <label for="name">Name</label>
        <Input
          id="name"
          name="name"
          type="text"
          validationRules="required"
          :isRequired="true"
          @changed="updateState"
        />
      </div>
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
      <button type="submit" class="block mx-auto">Sign Up</button>
    </form>
    <div class="swaps">
      <a
        href="#"
        @click.prevent="swapView('LOGIN')"
      >
        Login
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
  name: 'Signup',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  props: {
    swapView: {
      type: Function,
      required: true,
    },
  },
  methods: {
    ...mapActions('Auth', ['signup']),
    async onSubmit() {
      const result = await this.$validator.validate();
      if (result) {
        const err = this.signup({
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.handleError(err).then((response) => {
          if (!response) {
            this.resetFields();
          }
        });
      }
    },
    resetFields() {
      this.name = '';
      this.email = '';
      this.password = '';
    },
  },
  components: {
    Input,
  },
};
</script>
