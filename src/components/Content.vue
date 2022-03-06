<template lang="pug">
.content
    SearchInput(ref="searchInputRef" @onChangeText="onChangeText")
    VideoList
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import SearchInput from "./SearchInput.vue";
import VideoList from "./VideoList.vue";

export default defineComponent({
  setup() {
    const searchInputRef = ref<InstanceType<typeof SearchInput>>();
    const onChangeText = (text: string) => {
      console.log(text);
    };

    return {
      searchInputRef,
      onChangeText,
    };
  },
  components: { SearchInput, VideoList },
});
</script>

<style lang="scss" scoped>
div.content {
  padding: 1.5rem;

  div.search-input {
    max-width: 650px;
    margin-bottom: 3rem;
  }

  div.video-list {
    width: 100%;
    height: 100%;
  }
}
</style>
