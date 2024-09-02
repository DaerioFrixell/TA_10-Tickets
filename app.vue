<template>
  <div class="nav">
    <NuxtLink active-class="active" to="/">home</NuxtLink>
    <NuxtLink active-class="active" to="/profile">profile</NuxtLink>
    <NuxtLink active-class="active" to="/login">login</NuxtLink>
  </div>
  <NuxtPage />
</template>

<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";

const token = useLocalStorage("token", "qwe");
console.log("tok: ", token.value);
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 5px;
  color: inherit;
}

.active {
  color: green;
}
</style>
