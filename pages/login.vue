<template>
  <form>
    <label>
      Логин
      <input v-model="user.login" type="text" />
    </label>

    <label>
      Пароль
      <input :type="inputType" v-model="user.password" autocomplete="on" />
      <button @click.prevent="handlerViewPassword">
        <span v-if="showPassword">скрыть</span>
        <span v-else>показать</span>
        пароль
      </button>
    </label>

    <button @click.prevent="toLogin">Войти</button>
  </form>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";
definePageMeta({
  middleware: ["auth"],
});

const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const user = ref({ login: "", password: "" });
const inputType = ref("password");
const showPassword = ref(false);

const toLogin = async () => {
  await authenticateUser(user.value);
  if (authenticated.value) {
    navigateTo("/");
  }
};
const handlerViewPassword = () => {
  if (inputType.value === "password") {
    inputType.value = "text";
    showPassword.value = true;
  } else {
    inputType.value = "password";
    showPassword.value = false;
  }
};
</script>
