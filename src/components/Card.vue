<template>
  <div class="card">
    <ul class="card__images" v-masonry>
      <li class="card__image" v-masonry-tile>
        <VImage
          @loaded="hasLoaded"
          :src="require('@/assets/images/alps.jpg')"
        />
      </li>
      <li class="card__image" v-masonry-tile>
        <VImage
          @loaded="hasLoaded"
          :src="require('@/assets/images/agility.jpg')"
        />
      </li>
      <li class="card__image" v-masonry-tile>
        <VImage
          @loaded="hasLoaded"
          :src="require('@/assets/images/drone.jpg')"
        />
      </li>
      <li class="card__image" v-masonry-tile>
        <VImage
          @loaded="hasLoaded"
          :src="require('@/assets/images/lighthouse.jpg')"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import VImage from './VImage';

export default {
  name: 'Card',
  data() {
    return {
      countLoaded: 0,
      loadedMax: 4,
    };
  },
  watch: {
    countLoaded(val) {
      if (val >= this.loadedMax) {
        this.$nextTick(() => {
          this.$redrawVueMasonry();
        });
      }
    },
  },
  methods: {
    hasLoaded() {
      this.countLoaded++;
    },
  },
  components: {
    VImage,
  },
};
</script>