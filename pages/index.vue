<template>
  <div>
    <h1>Тикет-система</h1>

    <label for="">текст тикета</label>
    <input
      v-model="ticketText.text"
      placeholder="введите текст..."
      type="text"
    />

    <button @click.prevent="toAddTicket">добавить тикет</button>
    <div class="ticket" v-for="ticket in getTickets">
      <input type="checkbox" :checked="ticket.checked" />
      <span>{{ ticket.date }}</span>
      <span>{{ ticket.text }}</span>
      <button @click.prevent="toDelete(ticket.id)">X</button>
    </div>
    <button @click.prevent="toLocal">toLocal</button>
    <button @click.prevent="getLocal">getLocal</button>
    <p>{{ test }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTicketsStore } from "~/store/tickets";

type CurrentDate = {
  day: number;
  month: number;
};

definePageMeta({
  middleware: ["auth"],
});

const { addTickets, removeTickets, toLocal, getLocal, getTickets } =
  useTicketsStore();
const { test } = storeToRefs(useTicketsStore());

const ticketText = ref({
  text: "",
});

const toAddTicket = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const date = getDate({ day, month });
  const id = new Date().getTime().toString();

  addTickets({ text: ticketText.value.text, date, id, checked: false });
  ticketText.value.text = "";
};

const toDelete = (id: string) => {
  removeTickets(id);
};

const getDate = ({ day, month }: CurrentDate) => {
  let mutateDay = day.toString();
  let mutateMonth = month.toString();

  if (day < 10) mutateDay = `0${day}`;
  if (month < 10) mutateMonth = `0${month}`;

  const newDate = `${mutateDay}.${mutateMonth}`;

  return newDate;
};
</script>

<style lang="scss">
h1 {
  margin-bottom: 10px;
}

.ticket {
  display: flex;
  gap: 5px;
}
</style>
