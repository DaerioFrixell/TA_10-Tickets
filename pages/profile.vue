<script setup lang="ts">
const name = "name";
</script>

<template>
  <div>
    <div>
      <ProfileItem :name-props="'имя'" :value-props="'name'" />
      <ProfileItem :name-props="'фамилия'" :value-props="'surname'" />
      <ProfileItem
        :name-props="'информация о пользователе'"
        :value-props="'info'"
      />
      <ProfileSelect :cities="['one', 'two']" />
      <ProfileBirth :birth="'2011-05-05'" />
    </div>
  </div>
</template>
