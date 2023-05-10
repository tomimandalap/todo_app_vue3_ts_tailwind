<script setup lang="ts">
import { useRouter } from "vue-router";
import AButton from "../components/atoms/AButton.vue";

const router = useRouter();
</script>

<template>
  <div
    class="m-4 flex min-h-screen flex-col items-center justify-center rounded-lg border-2 border-black p-10 md:m-10"
  >
    <h1 class="text-6xl font-semibold">
      <span class="text-error">t</span>
      <span class="text-primary">o</span>
      <span class="text-light-indigo">d</span>
      <span class="text-secondary">o</span>
    </h1>

    <p class="my-6 max-w-xl text-center text-sm md:text-lg">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, velit
      animi distinctio nemo odit harum quibusdam.
    </p>

    <AButton
      size="md"
      text="Get Started"
      active-class="bg-dark-secondary
    hover:bg-secondary transition ease-in-out delay-75 text-white my-10"
      @click="router.push('/todo')"
    />

    <img
      src="../../src/assets/images/IconInvite.svg"
      alt="icon invite"
      class="w-100 sm:w-6/12 md:w-4/12"
    />
  </div>
</template>
