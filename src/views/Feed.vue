<template>
  <main class="feed">
    
  </main>
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
