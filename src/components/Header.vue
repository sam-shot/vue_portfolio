<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Button from "./props/Button.vue";
</script>

<template>
  <header>
    <div class="container header__container">
      <div class="header__left">
        <h1 class="font-medium">Samuel</h1>
        <h1 class="font-medium">Ademujimi.</h1>
        <div class="header__underline"></div>
        <ul class="header__social-links">
          <li>
            <a href="https://twitter.com/samshot_01" target="_blank"><i class="uil uil-twitter"></i></a>
          </li>
          <li>
            <a href="https://github.com/sam-shot" target="_blank"><i class="uil uil-github"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/samshot01/" target="_blank"><i class="uil uil-linkedin"></i></a>
          </li>
        </ul>
      </div>
      <div class="header__right ">
        <p class="text-sm opacity-70">


        </p>
        <span class="text-sm opacity-50"> <br>Hello, I am a skilled developer based in Nigeria, specializing in mobile
          and web applications. </span>
        <span class="text-sm opacity-100"> <br>With my extensive experience in building custom solutions, I strive to
          provide innovative and user-friendly applications that meet the needs of my clients.</span>
        <span class="text-sm opacity-50"> <br> I am dedicated to bringing your ideas to life and helping you achieve
          your goals.</span>
        <div class="mt-10 sm:mt-2 flex flex-row justify-between">
          <Button class="" text="Hire me" button_type="primary"></Button>

          <Button text="Download CV" button_type="outlined"></Button>
        </div>
      </div>
    </div>
  </header>
  <div class="container achievements__container">
      <div class="achievement">
        <h2>24</h2>
        <p>Projects</p>
      </div>
      <div class="achievement">
        <h2>4</h2>
        <p>Client</p>
      </div>
      <div class="achievement">
        <h2>24</h2>
        <p>Projects</p>
      </div>
      <div class="achievement">
        <h2>24</h2>
        <p>Projects</p>
      </div>
    </div>

</template>