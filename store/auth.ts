import { defineStore } from 'pinia';

interface UserPayloadInterface {
  login: string;
  password: string;
}
export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
  }),
  actions: {
    async authenticateUser({ login, password }: UserPayloadInterface) {
      if (login === "admin" && password === "admin") {
        const token = useCookie('token');
        token.value = 'access';
        this.authenticated = true;
        console.log('thi:', this.authenticated)
      }
    },
    logUserOut() {
      const token = useCookie('token');
      this.authenticated = false;
      token.value = null;
    },
  },
});