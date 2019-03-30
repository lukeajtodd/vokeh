<template>
  <main class="dashboard">
    
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
    components: {
        HelloWorld
    }
})
export default class Dashboard extends Vue {}
</script>
