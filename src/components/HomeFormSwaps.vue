<template>
  <div class="swaps">
    <a href="#" @click.prevent="swapView('ForgotPassword')">Forgot Password</a>
    <a href="#" @click.prevent="swapView('Signup')">Create an Account</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

export default class Swaps extends Vue {}
</script>
