<template>
  <div class="feed__container">
    <aside class="feed__you card"></aside>
    <main class="feed" id="grid">
      <Card v-for="i in Array(20)" :key="i" />
    </main>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import Card from '@/components/Card.vue';

export default {
  name: 'Feed',
  mounted() {
    this.loading(false);
  },
  methods: {
    ...mapMutations(['loading']),
  },
  components: { Card },
};
</script>
