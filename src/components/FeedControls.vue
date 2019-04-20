<template>
  <aside class="feed__you card--with-clip card">
    <ProfileClip />
  </aside>
</template>

<script>
import ProfileClip from './ProfileClip';

export default {
  name: 'FeedControls',
  components: { ProfileClip },
};
</script>

