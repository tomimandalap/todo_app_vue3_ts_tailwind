<script setup lang="ts">
import { defineProps, computed, ref, watch } from "vue";
import { useTodoStore } from "../../store/todo";
import { ItemTodo } from "../../types/todoList";

import MItemTodo from "./MItemTodo.vue";

interface IPropsListTodo {
  title?: string;
}

const props = withDefaults(defineProps<IPropsListTodo>(), {
  title: "Title",
});

const todoStore = useTodoStore();

const items = ref<ItemTodo[]>([]);

const todoList = computed(() => {
  return todoStore.todoList;
});

const statusList = computed(() => todoStore.statusList);

watch(
  todoList,
  (newValue) => {
    items.value = newValue;
  },
  { immediate: true },
);

watch(statusList, (newValue) => {
  if (newValue) items.value = todoStore.filterByStatus;
});
</script>

<template>
  <fieldset
    v-if="items.length"
    class="mt-10 h-[500px] overflow-y-auto rounded-md border-2 border-light-indigo p-2 md:p-4"
  >
    <legend class="font-semibold text-indigo-400">
      {{ props.title }} {{ statusList }}
    </legend>

    <MItemTodo
      v-for="(item, index) in items"
      :key="index"
      :index-of="index"
      :data="item"
    />
  </fieldset>
</template>
