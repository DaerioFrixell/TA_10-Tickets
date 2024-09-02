<template>
  <form action="">
    <label>
      Login
      <input v-model="login" type="text" />
    </label>

    <!-- скрыть/показать добавить -->
    <label>
      Password <input v-model="password" type="password" autocomplete="on" />
    </label>

    <button @click.prevent="toLogin({ login, password })">Log in</button>
  </form>
</template>

<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";

type toLoginProps = {
  login: string;
  password: string;
};

const login = defineModel("login", { type: String, default: "" });
const password = defineModel("password", { type: String, default: "" });

const toLogin = ({ login, password }: toLoginProps) => {
  if (login === "admin" && password === "admin") {
    useLocalStorage("token", "access");
    navigateTo("/");
  }
};
</script>
