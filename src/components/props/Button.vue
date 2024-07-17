<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

defineProps({
  text: {
    type: String,
    required: true
  },
  button_type: {
    type: String,
    
  }
})
</script>

<template>
<button :class="{'primary': button_type === 'primary','outlined': button_type === 'outlined' }" id="btn1" class="btn ">{{ text }}</button>
</template>

<style>
.btn {
  background: var(--color-white);
  color: var(--color-black);
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: .7rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  font-size: .85rem;
  font-family: "Poppins", sans-serif;
}

.btn:hover {
  background: rgba(80, 55, 90, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-white);

  color: var(--color-white);
  box-shadow: 0.2rem 0.3rem var(--color-yellow);
}

.primary {
  background: var(--color-yellow);
  color: var(--color-black);
}
.outlined {
  background: transparent;
  color: var(--color-white);
  border: 1px solid var(--color-white);
}
</style>