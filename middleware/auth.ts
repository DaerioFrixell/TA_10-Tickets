import { useLocalStorage } from '@vueuse/core'

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useLocalStorage('token', 'qwe')
  if (token.value !== 'access') {
    return navigateTo('/login')
  }
})