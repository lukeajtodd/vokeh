<template>
  <aside class="feed-sidebar card--with-clip card">
    <ProfileClip :userProfile="userProfile" />
    <ul class="feed-sidebar__controls">
      <li class="feed-sidebar__logout">
        <a @click.prevent="logout" class="link-icon" href="#">
          <i class="icon-logout"></i>
        </a>
      </li>
      <li class="feed-sidebar__settings">
        <a class="link-icon" href="#">
          <i class="icon-cog"></i>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProfileClip from './ProfileClip';

export default {
  name: 'FeedSidebar',
  computed: {
    ...mapState('Auth', ['userProfile']),
  },
  methods: {
    ...mapActions('Auth', ['logout']),
  },
  components: { ProfileClip },
};
</script>

