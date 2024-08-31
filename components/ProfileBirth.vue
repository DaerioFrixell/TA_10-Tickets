<script setup lang="ts">
const props = defineProps({
  birth: String,
});
</script>

<template>
  <div>
    <div>
      <span>Дата рождения:</span>
      <input type="date" :value="birth" />
    </div>
  </div>
</template>

<style>
.item {
  display: flex;
  gap: 5px;
}
</style>
