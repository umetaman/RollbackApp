<template lang="pug">
.app-container 
    Inspector.app-inspector(ref="inspector")
    Content.app-content
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Inspector from "./components/Inspector.vue";
import Content from "./components/Content.vue";

export enum Category {
  All = 0,
  YouTube = 1,
  Vimeo = 2,
}

export default defineComponent({
  setup() {},
  components: { Inspector, Content },
});
</script>

<style lang="scss" scoped>
div.app-container {
  display: flex;
  width: 100%;
  height: 100%;

  div.app-inspector {
    width: 100%;
    min-width: 300px;
    max-width: 300px;
    height: 100%;
    background-color: #dddddd;
  }

  div.app-content {
    width: 100%;
    height: 100%;
  }
}
</style>
