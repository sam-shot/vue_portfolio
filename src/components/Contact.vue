<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Button from "./props/Button.vue";
</script>
<template>
  <div
    class="mx-auto flex flex-col md:flex-row my-20 w lg:w-3/4 justify-center gap-10"
  >
    <div class="">
      <h1 class="text-4xl font-medium mb-10">
        <span class="opacity-70 text-yellow-100">Let's </span>
        <span
          >make something <br /><span class="text-yellow-500 italic"
            >amazing</span
          ></span
        >
        <span class="opacity-70 text-yellow-200"> together.</span>
      </h1>
      <h1 class="text-2xl font-medium">
        <span class="opacity-60">Start by </span>
        <span class="opacity-90 underline">saying hi.</span>
      </h1>
    </div>
    <div class="flex flex-col">
      <textarea
        type="text"
        rows="4"
        class="mb-10 md:w-80 font-normal text-sm bg-white bg-opacity-10 border-solid border-2 border-gray-500 rounded-md p-2"
        placeholder="Your Message.."
      ></textarea>

      <Button text="Contact me" button_type="outlined" class="w-fit" />
    </div>
  </div>
</template>

<style>
.w {
  width: 90%;
}
</style>
