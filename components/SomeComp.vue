<template>
  <div>some comp {{ count }}</div>
</template>

<script setup lang="ts">
const count = ref(1); // ref is auto-imported
</script>
