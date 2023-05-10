<script setup lang="ts">
import { defineProps } from "vue";
import { ItemTodo } from "../../types/todoList";
import { useTodoStore } from "../../store/todo";

import AButton from "../atoms/AButton.vue";
import AIconTrash from "../atoms/icons/AIconTrash.vue";
import AIconCheckList from "../atoms/icons/AIconCheckList.vue";

const props = defineProps<{
  indexOf: number;
  data: ItemTodo;
}>();

const todoStore = useTodoStore();

function hanldeDeleteList(index: number) {
  todoStore.deleteList(index);
}

function handleDoneList(index: number) {
  todoStore.doneList(index);
}
</script>

<template>
  <div
    :class="{
      'border-2 border-light-indigo text-indigo-400': !props.data.status,
      'border-0 bg-light-indigo text-indigo-400': props.data.status,
    }"
    class="my-2 flex items-center justify-between p-2"
  >
    <span
      :class="{ 'line-through': props.data.status }"
      class="truncate whitespace-nowrap md:w-72"
      >{{ props.data.title }}</span
    >

    <div v-if="!props.data.status">
      <AButton
        size="sm"
        text="Delete"
        active-class="border border-error hover:bg-red-100 text-red-500 mr-2"
        @click="hanldeDeleteList(props.indexOf)"
      >
        <template #icon><AIconTrash /></template>
      </AButton>
      <AButton
        size="sm"
        text="Done"
        active-class="border border-light-indigo hover:bg-indigo-100 text-indigo-400"
        @click="handleDoneList(props.indexOf)"
      >
        <template #icon><AIconCheckList /></template>
      </AButton>
    </div>
  </div>
</template>
