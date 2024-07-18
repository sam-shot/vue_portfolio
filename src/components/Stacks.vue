<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import dart from "../assets/images/dart.svg";
import flutter from "../assets/images/flutter.svg";
import node from "../assets/images/node.svg";
import vue from "../assets/images/vue.svg";

const stacks = ref([
  {
    id: 1,
    name: "Flutter",
    image: flutter,
  },
  {
    id: 2,
    name: "Vue.js",
    image: vue,
  },
  {
    id: 3,
    name: "Node.js",
    image: node,
  },
  {
    id: 4,
    name: "Dart",
    image: dart,
  },
]);
</script>

<template >
  <div class="mx-auto mb-14 w-3/4 flex md:flex-row flex-col gap-3 items-center justify-center">
    <div
      v-for="stack in stacks"
      :key="stack.id"
      class="rounded-md bg text-gray-500 h-40 w-60 border border-solid border-gray-700 flex flex-col justify-center content-centerte items-center"
    >
      <img :src="stack.image" class="h-20 w-20 mb-4 img" />
      <p class="font-semibold tracking-wide">{{ stack.name }}</p>
    </div>
  </div>
</template>

<style>
.bg {
  background-color: var(--color-bg-dark2);
  transition: var(--transition);
}

.bg:hover {
  background: rgba(80, 55, 90, 0.2);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  color: whitesmoke;
  transform: translateY(-5px);
  border: 1px solid whitesmoke;
}

.img {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%)
    contrast(100%);
  transition: var(--transition);
}

.bg:hover .img {
  transition: var(--transition);
  filter: none;
}
</style>
