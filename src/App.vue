<template>
  <div class="layout">
    <main>
      <router-view></router-view>
    </main>
    <div class="compensator"></div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default defineComponent({
  name: "App",
  components: {
    FooterComponent,
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
