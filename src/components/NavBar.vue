<script setup>

</script>

<template>
  <nav>
    <div class="container nav__container">
      <h2 class="text-base font-semibold ">_sam.dev_</h2>
      <ul class="nav__links font-medium">
        <li><span @click="$emit('scrollTo','navbar')" id="l1" class="focusedLink opacity-90">About </span></li>
        <li>
          <span @click="$emit('scrollTo','project')" id="l2" class="opacity-90"
            >Projects
          </span>
        </li>
        <li><span @click="$emit('scrollTo','contact')" id="l3" class="opacity-90">Contact </span></li>
      </ul>
      <div class="nav__menu">
        <button class="open_menu nav__button">
          <i class="uil uil-bars"></i>
        </button>
        <button class="close_menu nav__button">
          <i class="uil uil-times"></i>
        </button>
      </div>
    </div>
  </nav>
</template>
