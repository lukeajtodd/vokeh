<template>
  <div class="profile-clip">
    <div class="profile-clip__avatar">
      <v-lazy-image src="http://i.pravatar.cc/300" />
    </div>
    <div class="profile-clip__name">
      {{ userProfile.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileClip',
  props: {
    userProfile: {
      type: [Object, Boolean],
      default: false,
    },
  },
};
</script>

