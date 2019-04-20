<template>
  <div class="card card--with-clip">
    <ProfileClip />
    <ul class="card__images" v-masonry>
      <li class="card__image" v-masonry-tile>
        <VImage @loaded="hasLoaded" src="https://source.unsplash.com/random" />
      </li>
      <li class="card__image" v-masonry-tile>
        <VImage
          @loaded="hasLoaded"
          src="https://source.unsplash.com/user/erondu/likes"
        />
      </li>
      <li class="card__image" v-masonry-tile>
        <VImage
          @loaded="hasLoaded"
          src="https://source.unsplash.com/collection/190727"
        />
      </li>
      <li class="card__image" v-masonry-tile>
        <VImage
          @loaded="hasLoaded"
          src="https://source.unsplash.com/user/erondu"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import VImage from './VImage';
import ProfileClip from './ProfileClip';

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
    ProfileClip,
  },
};
</script>