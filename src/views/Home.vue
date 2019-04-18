<template>
  <Universe />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Universe from "@/components/Universe/Universe.vue"; // @ is an alias to /src

@Component({
  components: {
    Universe
  }
})
export default class Home extends Vue {}
</script>
