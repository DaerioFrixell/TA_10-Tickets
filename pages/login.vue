<template>
  <form action="">
    <label>
      Логин
      <input v-model="user.login" type="text" />
    </label>

    <!-- скрыть/показать добавить -->
    <label>
      Пароль
      <input v-model="user.password" type="password" autocomplete="on" />
    </label>

    <button @click.prevent="toLogin">Log in</button>
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
const router = useRouter();

console.log("au:", authenticated.value);

const user = ref({ login: "", password: "" });
const toLogin = async () => {
  await authenticateUser(user.value);
  if (authenticated.value) {
    navigateTo("/");
  }
};
</script>
