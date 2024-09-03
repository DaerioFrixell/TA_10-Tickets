<template>
  <div>
    <Profile />
    <p>
      {{ data }}
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const { data } = await useFetch("/api/profile");
const asd = data.value;
console.log("d: ", data.value);
</script>
