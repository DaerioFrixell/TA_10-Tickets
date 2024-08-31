<template>
  <div class="nav">
    <NuxtLink active-class="active" to="/">home</NuxtLink>
    <NuxtLink active-class="active" to="/profile">profile</NuxtLink>
    <NuxtLink active-class="active" to="/login">login</NuxtLink>
  </div>
  <NuxtPage />
</template>

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
