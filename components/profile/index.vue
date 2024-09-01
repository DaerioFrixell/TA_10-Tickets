<script setup lang="ts">
import ProfileEdit from "./edit/index.vue";
import ProfileView from "./view/index.vue";

const isEdit = useIsEdit();
</script>

<template>
  <div>
    <component :is="isEdit ? ProfileEdit : ProfileView" />
  </div>
</template>
