import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useLocalStorage('token', 'null')
  if (token.value !== 'qwe') {
    return navigateTo('/login')
  }
})