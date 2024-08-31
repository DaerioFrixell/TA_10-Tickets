<script setup lang="ts">
const props = defineProps({
  nameProps: String,
  valueProps: String,
});
</script>

<template>
  <div>
    <div class="item">
      <span>{{ nameProps }}:</span>
      <span>{{ valueProps }}</span>
    </div>
  </div>
</template>

<style>
.item {
  display: flex;
  gap: 5px;
}
</style>
