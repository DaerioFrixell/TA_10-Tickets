<script setup lang="ts">
import { useStorage } from "@vueuse/core";

type ProfileInitStateProps = {
  name: string;
  surname: string;
  info: string;
  birth: string;
  city: string;
};

type Asd = keyof ProfileInitStateProps;

const props = defineProps({
  nameProps: {
    type: String,
    required: true,
  },
  placeholder: String,
});
// const updateField = (event: any) => {
//   const value = event.target.value;
//   n.value = value;
// };

const profileInitState = {
  name: "initName",
  surname: "initSurname",
  info: "initInfo",
  birth: "2000-01-01",
  city: "initCity",
};
// const asd: keyof profileInitStateProps = props.nameProps;
const state = useStorage("vue-use-local-storage", profileInitState);
</script>

<template>
  <div>
    <div class="item">
      <span>{{ nameProps }}:</span>
      <input v-model="state.name" />
    </div>
  </div>
</template>

<style>
.item {
  display: flex;
  gap: 5px;
}
</style>
