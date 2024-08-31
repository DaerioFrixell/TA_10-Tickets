<template>
  <div>loh</div>
  <p>{{ count }}</p>
  <SomeComp />
  <SomeComp />
</template>

<script setup lang="ts">
const count = ref(1); // ref is auto-imported
</script>
