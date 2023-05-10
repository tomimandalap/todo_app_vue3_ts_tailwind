<script setup lang="ts">
import { defineProps, computed } from "vue";
import { SizeBtn } from "../../types/button";

interface IPropsButton {
  block?: boolean;
  text?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  activeClass?: string | (string | { [key: string]: boolean })[];
}
const props = withDefaults(defineProps<IPropsButton>(), {
  block: false,
  text: "Button",
  size: "sm",
  disabled: false,
  activeClass: "",
});

const sizeButton = computed(() => SizeBtn[props.size]);
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      sizeButton,
      props.activeClass,
      {
        'w-full': props.block,
        'border-0 bg-gray-50 text-gray-300': disabled,
        'text-gray-900': !disabled,
      },
    ]"
    class="rounded-md text-center font-medium"
  >
    <slot v-if="!$slots.icon" name="title"> {{ props.text }}</slot>
    <slot v-else name="icon"> {{ props.text }}</slot>
  </button>
</template>
