<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Button from "./props/Button.vue";


const bookCall = () => {
  window.open("https://calendly.com/d/cmhb-59w-pb7/samuel", "_blank");
};
const downloadCv = () => {
  window.open("https://drive.google.com/file/d/1-26ema5qGdTa2siPp71tWxAefwFFzPPw/view", "_blank");
};
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
      <div class="header__right">
        <p class="text-sm opacity-70"></p>
        <span class="text-sm opacity-50">
          <br />Hello, I am a skilled developer based in Nigeria, specializing
          in mobile and web applications.
        </span>
        <span class="text-sm opacity-100">
          <br />With my extensive experience in building custom solutions, I
          strive to provide innovative and user-friendly applications that meet
          the needs of my clients.</span>
        <span class="text-sm opacity-50">
          <br />
          I am dedicated to bringing your ideas to life and helping you achieve
          your goals.</span>
        <div class="mt-10 sm:mt-2 flex flex-row justify-between">
          <Button @click="bookCall" class="" text="Book a Call" button_type="primary" />
          <Button @click="downloadCv" text="Download CV" button_type="outlined" />
        </div>
      </div>
    </div>
  </header>
  <div class="container achievements__container">
    <div class="achievement">
      <h2>15+</h2>
      <p>Projects</p>
    </div>
    <div class="achievement">
      <h2>10+</h2>
      <p>Clients</p>
    </div>

  </div>
</template>
