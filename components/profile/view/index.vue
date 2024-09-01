<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const profileInitState = {
  name: "initName",
  surname: "initSurname",
  info: "initInfo",
  birth: "2000-01-01",
  city: "initCity",
};

const state = useStorage("vue-use-local-storage", profileInitState);
const props = defineProps({
  name: String,
});

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
      <ProfileViewField :name-props="'город'" :value-props="'city'" />
      <ProfileViewField
        :name-props="'дата рождения'"
        :value-props="'2015-05-05'"
      />
      <button @click="isEdit = true">edit</button>
    </div>
  </div>
</template>
