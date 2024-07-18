<script setup>
import Contact from "./components/Contact.vue";
import Header from "./components/Header.vue";
import NavBar from "./components/NavBar.vue";
import Projects from "./components/Projects.vue";
import Stacks from "./components/Stacks.vue";

const scrollTo = (elemRef) => {
  window.scrollTo({
    top: document.getElementById(elemRef).offsetTop - 100,
    behavior: "smooth",
  });
};
</script>

<template>
  <NavBar @scroll-to="scrollTo" id="navbar" />
  <Header />
  <Stacks />
  <Projects id="project" />
  <Contact id="contact" />

  <div class="container text-center pb-4">
    <div class="flex flow-row content-start justify-around mb-10">
      <h2 class="text-base font-semibold">_sam.dev_</h2>
      <ul class="header__social-links">
        <li>
          <a href="https://twitter.com/samshot_01" target="_blank"
            ><i class="uil uil-twitter"> </i
          ></a>
        </li>
        <li>
          <a href="https://github.com/sam-shot" target="_blank"
            ><i class="uil uil-github"> </i
          ></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/samshot01/" target="_blank"
            ><i class="uil uil-linkedin"></i
          ></a>
        </li>
      </ul>
    </div>
    <p class="font-modium text-xs">
      2024 Samuel Ademujimi. All rights reserved.
    </p>
  </div>
</template>
