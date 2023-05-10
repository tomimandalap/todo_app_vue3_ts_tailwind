<script setup lang="ts">
import { useRouter } from "vue-router";

import AButton from "../components/atoms/AButton.vue";

const router = useRouter();
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="mb-8 text-3xl font-bold text-dark-secondary">404 | Not Found</h1>

    <AButton
      size="md"
      text="Go Home"
      active-class="bg-dark-secondary
    hover:bg-secondary transition ease-in-out delay-75 text-white"
      @click="router.push('/')"
    />
  </div>
</template>
