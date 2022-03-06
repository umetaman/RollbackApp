<template lang="pug">
.inspector 
    .functions.inspector-row
        InspectorButton.add-btn(:label="'New Video'" :iconSrc="PlusIcon")        
    .category.inspector-row 
        InspectorButton.category-btn.category-all-btn(
            :class="activeButtonClass(Category.All)"
            :label="'All'"
            :iconSrc="AllIcon"
            @onClickButton="(e) => selectCategory(Category.All)")
        InspectorButton.category-btn.category-youtube-btn(
            :class="activeButtonClass(Category.YouTube)"
            :label="'YouTube'"
            :iconSrc="YouTubeIcon"
            @onClickButton="(e) => selectCategory(Category.YouTube)")
        InspectorButton.category-btn.category-vimeo-btn(
            :class="activeButtonClass(Category.Vimeo)"
            :label="'Vimeo'"
            :iconSrc="VimeoIcon"
            @onClickButton="(e) => selectCategory(Category.Vimeo)")
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import PlusIcon from "../assets/icons/circle-plus.svg";
import AllIcon from "../assets/icons/border-all.svg";
import VimeoIcon from "../assets/icons/vimeo.svg";
import YouTubeIcon from "../assets/icons/youtube.svg";
import InspectorButton from "./InspectorButton.vue";
import { Category } from "../App.vue";

export default defineComponent({
  setup() {
    const currentCategory = ref(Category.All);
    const selectCategory = (category: Category) => {
      currentCategory.value = category;
    };
    const activeButtonClass = computed(() => {
      return (category: Category) =>
        category === currentCategory.value ? "active" : "";
    });

    return {
      PlusIcon,
      AllIcon,
      VimeoIcon,
      YouTubeIcon,
      currentCategory,
      selectCategory,
      activeButtonClass,
      Category,
    };
  },
  components: { InspectorButton },
});
</script>

<style lang="scss" scoped>
div.inspector {
  padding: 1.5rem;
}

div.inspector-row {
  margin-bottom: 2.5rem;

  button {
    margin-bottom: 0.75rem;

    &.inspector-btn {
      &.active {
        background-color: #ffff33;
      }
    }
  }
}
</style>
