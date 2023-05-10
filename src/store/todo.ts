import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { ItemTodo } from "../types/todoList";

export const useTodoStore = defineStore("todo", () => {
  // STATE
  const statusList = ref<string>("");
  const todoList = ref<ItemTodo[]>([]);

  // GETTERS
  const filterByStatus = computed(() => {
    if (statusList.value.includes("All Status")) return todoList.value;

    let isStatus = statusList.value.includes("Done");
    return todoList.value.filter((list: ItemTodo) => list.status === isStatus);
  });

  // ACTIONS
  function addList(itemTodo: ItemTodo) {
    todoList.value.push(itemTodo);
  }

  function deleteList(index: number) {
    todoList.value.splice(index, 1);
  }

  function doneList(index: number) {
    todoList.value.forEach((item, idx) => {
      if (idx === index) item.status = true;
    });
  }

  return {
    statusList,
    todoList,
    filterByStatus,
    addList,
    deleteList,
    doneList,
  };
});
