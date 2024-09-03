<template>
  <div>
    <header>
      <div class="nav">
        <div class="nav__links">
          <NuxtLink class="nav__links__link" active-class="active" to="/"
            >Home</NuxtLink
          >
          <NuxtLink class="nav__links__link" active-class="active" to="/profile"
            >Profile</NuxtLink
          >
        </div>
        <div v-if="authenticated" style="float: right">
          <button class="logout" @click="logout">Logout</button>
        </div>
      </div>
    </header>

    <div class="container">
      <slot />
    </div>
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

<style scoped lang="scss">
a {
  color: inherit;
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  height: 60px;
  margin-bottom: 10px;
  align-items: center;
  background: rgb(0, 0, 12);

  &__links {
    display: flex;
    gap: 10px;

    &__link {
      color: white;
      opacity: 0.6;
      &:hover {
        color: rgba(0, 220, 128, 0.763);
      }
    }
  }
}

.active {
  opacity: 1;
  color: rgb(0 220 130);
}

.logout {
  background: black;
  border: 2px solid white;
  color: white;
  padding: 0px 6px;
  height: 40px;
  transition: all 0.3s;

  &:hover {
    transform: scale(105%);
  }
}
</style>
