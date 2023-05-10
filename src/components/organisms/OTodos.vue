<script setup lang="ts">
import MCreateTodo from "../molecules/MCreateTodo.vue";
import MTitleTodo from "../molecules/MTitleTodo.vue";
import MListTodo from "../molecules/MListTodo.vue";
</script>

<template>
  <MTitleTodo />
  <MCreateTodo />
  <MListTodo title="List" />
</template>
