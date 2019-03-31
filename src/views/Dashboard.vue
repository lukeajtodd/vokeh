<template>
  <main class="dashboard">
    
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapMutations } from 'vuex';

@Component({
  methods: mapMutations(['loading']),
})
export default class Dashboard extends Vue {
  // For Vuex
  private loading: any;

  private mounted() {
    this.loading(false);
  }
}
</script>
