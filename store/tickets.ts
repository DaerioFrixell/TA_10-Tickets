import { defineStore } from 'pinia';

type TicketProps = {
  id: string
  checked: boolean
  text: string;
  date: string;
}
export const useTicketsStore = defineStore('tickets', {
  state: () => ({
    test: '' as string || null,
    tickets: [
      {
        id: '1',
        checked: true,
        text: 'ticket is done',
        date: '10.01.20',
      },
      {
        id: '12',
        checked: false,
        text: 'ticket not done',
        date: '10.01.20',
      },
    ],
  }),
  getters: {
    getTickets: (state) => {
      return state.tickets
    }
  },
  actions: {
    addTickets(ticket: TicketProps) {
      this.tickets.push(ticket)
    },
    checkedHandler(id: string) {
      this.tickets.map(ticket => {
        if (ticket.id === id) ticket.checked = !ticket.checked
      })
    },
    removeTickets(id: string) {
      const newTickets = this.tickets.filter(ticket => ticket.id !== id);
      return this.tickets = newTickets;
    },
    toLocal() {
      localStorage.setItem('qwe', 'qwe')
    },
    getLocal() {
      this.test = localStorage.getItem('qwe')
    }
  },
});