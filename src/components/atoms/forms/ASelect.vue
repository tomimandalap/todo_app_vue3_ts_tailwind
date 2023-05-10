<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps<{
  modelValue: string;
  items: string[] | [];
  activeClass: string;
}>();

const emits = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

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
  <select
    v-model="vModel"
    :class="['rounded-md px-2 text-sm  focus:outline-0', props.activeClass]"
  >
    <option v-for="value in items" :value="value">{{ value }}</option>
  </select>
</template>
