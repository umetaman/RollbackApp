<template lang="pug">
.video-list 
    VideoItem
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VideoItem from "./VideoItem.vue";

export default defineComponent({
  setup() {},
  components: { VideoItem },
});
</script>

<style lang="scss" scoped>
div.video-item {
  width: 30%;
}
</style>
