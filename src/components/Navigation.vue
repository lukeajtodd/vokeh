<template>
  <nav class="navigation">
    
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
    @Prop() private msg!: string;
}
</script>
