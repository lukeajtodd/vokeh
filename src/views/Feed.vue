<template>
  <div class="feed__container">
    <FeedSidebar />
    <main class="feed" id="grid">
      <Card v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="i" />
    </main>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import Card from '@/components/Card.vue';
import FeedSidebar from '@/components/FeedSidebar.vue';

export default {
  name: 'Feed',
  mounted() {
    this.loading(false);
  },
  methods: {
    ...mapMutations(['loading']),
  },
  components: { Card, FeedSidebar },
};
</script>
