<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
  isLast: {
    type: Boolean,
    required: true,
  },
});

function openLink(link) {
  window.open(link, "_blank");
}
</script>


<template>
  <div
    class="flex md:flex-row flex-col justify-center gap-4 lg:w-3/4 center mx-auto"
  >
    <div
      :class="{ 'sm:order-last': !isLast }"
      class="p-4 project_bg rounded-xl border border-solid border-gray-700 min-h-40 basis-2/3"
    >
      <img
        :src="data.image"
        class="mb-5 w-full rounded-md border border-solid border-gray-700"
      />
      <div class="flex flex-row justify-between mb-4">
        <div class="">
          <span class="font-light text-xs opacity-70">Project title</span>
          <h2 class="font-medium">{{ data.title }}</h2>
        </div>
        <div class="">
          <span class="text-xs font-light opacity-70">Status</span>
          <h2 class="font-light flex flex-row gap-1 justify-center text-sm">
            <span
              :class="{
                'bg-green-500': data.status === 1,
                'bg-orange-500': data.status === 0,
              }"
              class="w-2 h-2 rounded-xl inline-block m-auto"
            ></span>
            <span
              >{{ data.status === 0 ? "Ongoing" : "Completed" }} project</span
            >
          </h2>
        </div>
      </div>
      <div class="flex flex-row align-center">
        <a :href="data.github" target="_blank"
          ><i class="text-3xl uil uil-github"></i
        ></a>
        <span
          class="md:inline hidden mx-4 m-auto font-normal opacity-80 underline text-sm"
          >{{ data.link }}</span
        >
        <button @click="openLink(data.link)" class="btn-project font-light my-auto">
          Preview
        </button>
      </div>
    </div>
    <div
      class="p-4 project_bg rounded-xl border border-solid border-gray-700 basis-1/3 flex flex-col justify-between"
    >
      <div class="mb-3">
        <span class="text-xs font-normal opacity-70">Stack</span>
        <h2 class="font-light text-sm">{{ data.stacks }}</h2>
      </div>
      <div class="mb-3">
        <span class="text-xs font-normal opacity-70">Project Type</span>
        <h2 class="font-light text-sm">{{ data.type }}</h2>
      </div>
      <div class="mb-3">
        <span class="text-xs font-normal opacity-70">Project Description</span>
        <h2 class="mt-1 font-normal text-sm">{{ data.description }}</h2>
      </div>
    </div>
  </div>
</template>

<style>
.project_bg {
  background-color: var(--color-bg-dark2);
}

img {
  object-fit: cover;
}

.btn-project {
  background-color: var(--color-bg-dark);
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 0.4rem 1rem;
  margin-left: auto;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.85rem;
  font-family: "Poppins", sans-serif;
}

.btn-project:hover {
  background: rgba(80, 55, 90, 0.2);
  border: 1px solid var(--color-yellow);

  color: var(--color-white);
}
</style>
