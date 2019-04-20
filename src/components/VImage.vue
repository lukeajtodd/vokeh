<template>
  <v-lazy-image :src="src" @load="emitLoaded" />
</template>

<script>
export default {
  name: 'VImage',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitLoaded() {
      this.$emit('loaded');
    },
  },
};
</script>

