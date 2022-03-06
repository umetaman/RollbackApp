<template lang="pug">
.search-input 
    div.search-icon
    input.search-text-input(
        type="text"
        name="search-text-input"
        placeholder="Search Videos..."
        v-model="inputText"
        @input="onChangeText"
        @change="onChangeText")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(_props, context) {
    const inputText = ref("");
    const preInputText = ref("");
    const onChangeText = (e: Event) => {
      if (preInputText.value !== inputText.value) {
        context.emit("onChangeText", inputText.value);
      }
      preInputText.value = inputText.value;
    };

    return {
      inputText,
      onChangeText,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/styles.scss";

div.search-input {
  width: 100%;
  height: 3rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: left;
  align-items: center;

  border-radius: 0.5rem;
  border: solid 1px #aaaaaa;

  > div.search-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    background-color: #555555;
    @include clipSvgBackground("../assets/icons/magnifying-glass.svg");
  }

  > input.search-text-input {
    width: 100%;
    height: 100%;
  }
}
</style>
