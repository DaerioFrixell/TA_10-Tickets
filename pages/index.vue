<template>
  <div class="ticket-system">
    <h1>Тикет-система</h1>

    <div class="ticket-form">
      <label>Добавить тикет</label>

      <div class="ticket-form__actions-wrapper">
        <input
          class="ticket-form__actions-wrapper__input"
          v-model="ticketText.text"
          placeholder="введите текст..."
          type="text"
        />

        <button
          class="ticket-form__actions-wrapper__button"
          @click.prevent="toAddTicket"
        >
          Добавить
        </button>
      </div>
    </div>

    <h2>Список</h2>
    <div class="no-tickets" v-if="!getTickets.length">Нет тикетов</div>
    <div class="tickets-list" v-for="ticket in tickets">
      <div :class="asd(ticket.checked)">
        {{ console.log(ticket) }}
        <input
          type="checkbox"
          :checked="ticket.checked"
          @click.self="checkedHandler(ticket.id)"
        />
        <span>{{ ticket.date }}</span>
        <span>{{ toSliceTextTicket(ticket.text) }}</span>
      </div>
      <button
        class="tickets-list__item-delete"
        @click.prevent="toDelete(ticket.id)"
      >
        X
      </button>
    </div>

    <button @click.prevent="toLocal">toLocal</button>
    <button @click.prevent="getLocal">getLocal</button>
    <p>{{ test }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTicketsStore } from "~/store/tickets";

definePageMeta({
  middleware: ["auth"],
});

const { addTickets, removeTickets, toLocal, getLocal, checkedHandler } =
  useTicketsStore();
const { getTickets, test, tickets } = storeToRefs(useTicketsStore());

const ticketText = ref({
  text: "",
});

const toAddTicket = () => {
  const date = getDate();
  const id = new Date().getTime().toString();

  addTickets({ text: ticketText.value.text, date, id, checked: false });
  ticketText.value.text = "";
};

const toDelete = (id: string) => {
  removeTickets(id);
};

const getDate = () => {
  let mutateDay: string | number = new Date().getDate();
  let mutateMonth: string | number = new Date().getMonth() + 1;

  if (mutateDay < 10) mutateDay = `0${mutateDay}`;
  if (mutateMonth < 10) mutateMonth = `0${mutateMonth}`;

  const newDate = `${mutateDay}.${mutateMonth}.24`;
  return newDate;
};

const toSliceTextTicket = (text: string) => {
  if (text.length > 16) {
    const sliceText = text.slice(0, 16);
    return `${sliceText}...`;
  } else {
    return text;
  }
};

const asd = (checked: boolean) => {
  let className = `tickets-list__item`;
  if (checked) className = `${className} done`;

  return className;
};
</script>

<style lang="scss">
h1 {
  margin-bottom: 10px;
  text-align: center;
  font-weight: normal;
  font-size: 34px;
}
h2 {
  margin-bottom: 8px;
  font-weight: normal;
  font-size: 26px;
  border-top: 1px solid rgba(211, 208, 208, 0.626);
}

.ticket-system {
  width: 400px;
  margin: auto;
  padding: 5px;
}

.ticket-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  &__actions-wrapper {
    width: 300px;

    &__input {
      width: 100%;
      height: 30px;
      padding: 3px;
      margin-bottom: 6px;
    }
    &__button {
      background: none;
      border: 2px solid rgba(14, 14, 14, 0.838);
      padding: 3px 5px;
      color: inherit;
    }
  }
}

.tickets-list {
  display: flex;
  justify-content: space-between;

  &__item {
    display: flex;
    gap: 18px;
    font-size: 18px;
    margin-bottom: 6px;
  }

  &__item-delete {
    background: rgba(244, 184, 184, 0.826);
    border: none;
    border-radius: 50%;
    font-size: 10px;
    opacity: 0.6;
    transition: all 0.3s;

    width: 20px;
    height: 20px;

    &:hover {
      background: rgb(245, 70, 70);
      opacity: 0.8;
    }
  }
}

.no-tickets {
  font-size: 16px;
}

.done {
  color: green;
  text-decoration: line-through;
}

@media (max-width: 600px) {
  .ticket-system {
    width: 300px;
  }

  .ticket-form {
    &__actions-wrapper {
      &__input {
        width: 260px;
      }
    }
  }
}
</style>
