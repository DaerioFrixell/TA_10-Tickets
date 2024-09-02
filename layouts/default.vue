<template>
  <div>
    <header>
      <div class="nav">
        <NuxtLink active-class="active" to="/">home</NuxtLink>
        <NuxtLink active-class="active" to="/profile">profile</NuxtLink>

        <div v-if="authenticated" class="loginBtn" style="float: right">
          <NuxtLink active-class="active" @click="logout">Logout</NuxtLink>
        </div>
        <div v-else class="loginBtn" style="float: right">
          <NuxtLink active-class="active" to="/login">Login</NuxtLink>
        </div>
      </div>
    </header>

    <div class="container">
      <slot />
    </div>

    <footer v-if="authenticated">
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const logout = () => {
  logUserOut();
  navigateTo("/login");
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 5px;
  color: inherit;
}

.active {
  color: green;
}
</style>
