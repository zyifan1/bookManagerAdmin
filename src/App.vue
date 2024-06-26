<script setup>
import {provide, ref} from "vue";

const theme = ref('light');
const isDarkMatch = window.matchMedia("(prefers-color-scheme: dark)");
theme.value = isDarkMatch.matches ? "dark" : "light";
document.documentElement.setAttribute('theme-mode', theme.value);
isDarkMatch.addEventListener("change", () =>
{
  theme.value = isDarkMatch.matches ? "dark" : "light";
  document.documentElement.setAttribute('theme-mode', theme.value);
})
provide("theme", theme);
</script>

<template>

  <router-view></router-view>

</template>

<style scoped>

</style>
