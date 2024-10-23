<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';
import SingleProject from './props/SingleProject.vue';
const projects = ref([
    {
        title: "CGPA Calculator",
        status: 0,
        github: "https://github.com/sam-shot",
        link: "https://vue-vacation-app.vercel.app/",
        stacks: "Vue.js, Javascript, Tailwind CSS, HTML",
        type: "Web App",
        description: "This is a website to discover places and plan your perfect vacation. Explore destinations, manage itineraries, and get personalized recommendations. Built with Vue.js for a seamless user experience.",
        image: "https://i.imghippo.com/files/HqJyh1721185931.png",
    },
    {
        title: "Vacation App",
        status: 0,
        github: "https://github.com/sam-shot",
        link: "https://vue-vacation-app.vercel.app/",
        stacks: "Vue.js, Javascript, Tailwind CSS, HTML",
        type: "Web App",
        description: "This is a website to discover places and plan your perfect vacation. Explore destinations, manage itineraries, and get personalized recommendations. Built with Vue.js for a seamless user experience.",
        image: "https://i.imghippo.com/files/HqJyh1721185931.png",
    },
    {
        title: "CopyNSync Waitlist",
        status: 1,
        github: "https://github.com/sam-shot",
        link: "https://copynsync.samddev.me/",
        stacks: "Vue.js, Javascript, Tailwind CSS, HTML",
        type: "Web App",
        description: "This is a waitlist website for copynsync where users can enter their contact details so they're notified when  the product is live.",
        image: "https://i.imghippo.com/files/4gY9f1721185958.png",
    },
    {
        title: "CopyNSync",
        status: 1,
        github: "https://github.com/sam-shot",
        link: "https://copynsync.samddev.me/",
        stacks: "Vue.js, Javascript, Tailwind CSS, HTML",
        type: "Web App",
        description: "This is a project I developed to revolutionize the way we copy and sync text. With CopyNSync, you can effortlessly transfer and synchronize text across multiple devices, enhancing productivity and simplifying workflows. Experience seamless text copying and syncing like never before!",
        image: "https://i.imghippo.com/files/4gY9f1721185958.png",
    },
]);
</script>

<template>

    <div class="latestprojects container">
        <div class="latestproject__up">
            <div class="header__underline"></div>

            <h3 class="font-medium ">Featured Projects</h3>
        </div>

        <SingleProject class="mb-20 " v-for="(item, index) in projects" :key="item.id" :data=item
            :isLast="index % 2 === 0"></SingleProject>

    </div>
</template>

<style>
</style>
