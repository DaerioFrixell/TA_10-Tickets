<template>
  <form class="form">
    <label class="form__field">
      Логин
      <input class="form__field__input" v-model="user.login" type="text" />
    </label>

    <label class="form__field">
      <div class="form__field__pass">
        <span>Пароль</span>
        <HidePass v-if="showPassword" @click.prevent="handlerViewPassword" />
        <ViewPass v-else @click.prevent="handlerViewPassword" />
      </div>
      <input
        class="form__field__input"
        :type="inputType"
        v-model="user.password"
        autocomplete="on"
      />
    </label>
    <div class="login">
      <button class="login__btn" @click.prevent="toLogin">Войти</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";
definePageMeta({
  middleware: ["auth"],
  layout: "login",
});

const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const user = ref({ login: "", password: "" });
const inputType = ref("password");
const showPassword = ref(false);

const toLogin = () => {
  authenticateUser(user.value);
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

<style scoped lang="scss">
.form {
  display: flex;
  width: 200px;
  margin: auto;
  margin-top: 40vh;
  transform: translateY(-50%);
  flex-direction: column;
  gap: 15px;

  &__field {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;

    &__input {
      padding: 4px;
    }

    &__pass {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
}

.login {
  width: 90px;
  height: 30px;
  &__btn {
    width: 100%;
    height: 100%;
    border: 2px solid black;
    background: rgba(255, 255, 255, 0);
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      background: rgba(176, 241, 174, 0.42);
    }
  }
}
</style>
