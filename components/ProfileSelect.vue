<script setup lang="ts">
const props = defineProps({
  cities: Array<string>,
});
</script>

<template>
  <div>
    <div>
      <span>Город:</span>
      <select>
        <option v-for="city in cities" :key="city" :label="city"></option>
      </select>
    </div>
  </div>
</template>
