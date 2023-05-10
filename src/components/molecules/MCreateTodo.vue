<script setup lang="ts">
import { ref, watch } from "vue";
import { ItemTodo } from "../../types/todoList";

import { useTodoStore } from "../../store/todo";

import AFormInput from "../atoms/forms/AInput.vue";
import AFromSelect from "../atoms/forms/ASelect.vue";
import AButton from "../atoms/AButton.vue";

const todoStore = useTodoStore();

const title = ref<string>("");
const status = ref<string>("All Status");
const itemTodo = ref<ItemTodo>({
  id: Date.now(),
  title: "",
  status: false,
});

function handleAddList() {
  todoStore.addList({ ...itemTodo.value, title: title.value });
  title.value = ""; // reset input value title
  status.value = "All Status"; // set input value status
}

watch(status, (newValue) => {
  todoStore.statusList = newValue;
});
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <AFormInput
      v-model="title"
      size="sm"
      placeholder="Create todo..."
      active-class="border-2 border-primary col-span-12 sm:col-span-8 text-blue-500"
    />

    <AFromSelect
      v-model="status"
      :items="['All Status', 'On Progress', 'Done']"
      active-class="border-2 border-primary text-blue-500 col-span-12 sm:col-span-2"
    />

    <AButton
      :disabled="title.length === 0"
      :active-class="[
        'col-span-12 sm:col-span-2',
        { 'bg-primary text-blue-500 hover:bg-blue-100': title.length > 0 },
      ]"
      size="sm"
      text="Add"
      @click="handleAddList"
    />
  </div>
</template>
