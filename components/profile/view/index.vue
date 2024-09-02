<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const profileInitState = {
  name: "init",
  surname: "init",
  info: "init",
  birth: "2000-01-01",
  city: "init",
};
const state = useStorage("vue-use-local-storage", profileInitState);

const isEdit = useIsEdit();
</script>

<template>
  <div>
    <div>
      <ProfileViewField :name-props="'имя'" :value-props="state.name" />
      <ProfileViewField :name-props="'фамилия'" :value-props="state.surname" />
      <ProfileViewField
        :name-props="'информация о пользователе'"
        :value-props="state.info"
      />
      <ProfileViewField :name-props="'город'" :value-props="state.city" />
      <ProfileViewField
        :name-props="'дата рождения'"
        :value-props="state.birth"
      />
      <button @click="isEdit = true">edit</button>
    </div>
  </div>
</template>
