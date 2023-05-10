<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { SizeInput } from "../../../types/input";

interface IPropsInput {
  modelValue: string;
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  activeClass?: string;
}

const props = withDefaults(defineProps<IPropsInput>(), {
  modelValue: "",
  size: "sm",
  placeholder: "Input...",
  activeClass: "",
});

const emits = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

const sizeInput = computed(() => SizeInput[props.size]);

const vModel = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <input
    v-model="vModel"
    v-alphaNumeric
    type="text"
    maxlength="100"
    :placeholder="props.placeholder"
    :class="['rounded-md px-4 text-sm focus:outline-0', activeClass, sizeInput]"
  />
</template>
