<template lang="pug">
button.inspector-btn(@click.stop="onClick")
    div.btn-icon(:style="iconStyle")
    span.btn-label(v-text="label")
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    label: { type: String, require: true, default: "" },
    iconSrc: { type: String, require: true, default: "" },
  },
  setup(props, context) {
    const onClick = () => {
      context.emit("onClickButton");
    };
    const iconStyle = computed(() => {
      return {
        "mask-image": `url(${props.iconSrc})`,
        "-webkit-mask-image": `url(${props.iconSrc})`,
      };
    });

    return { onClick, iconStyle };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/styles.scss";

button {
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: #eeeeee;
  border-radius: 0.5rem;

  &:active {
    opacity: 0.7;
  }

  > div.btn-icon {
    background-color: #555555;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    @include clipSvgBackground("");
  }
}
</style>
