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
      <div>
        <span>Имя:</span>
        <input v-model="state.name" type="text" />
      </div>

      <div>
        <span>Фамилия:</span>
        <input v-model="state.surname" type="text" />
      </div>

      <div>
        <span>Информация о пользователе:</span>
        <input v-model="state.info" type="text" />
      </div>
      <!--
      <ProfileEditField :name-props="'город'" :value-props="'city'" />
      <ProfileEditField
        :name-props="'дата рождения'"
        :value-props="'2015-05-05'"
      />  -->
      <button @click="isEdit = false">close edit</button>
    </div>
  </div>
</template>
