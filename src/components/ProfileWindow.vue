<template lang='pug'>
div(v-if='authStatus && profile !== undefined')
  .generic-window
    .generic-window__input-container
      span(class='input-bar-text') Логин
      input(class='generic-window__input-area input-bar-text' placeholder='...'
      v-model='profile.login')
    .generic-window__input-container
      span(class='input-bar-text') Имя
      input(class='generic-window__input-area input-bar-text' placeholder='...'
      v-model='profile.name')
    .generic-window__input-container
      span(class='input-bar-text') Почта
      input(class='generic-window__input-area input-bar-text' placeholder='...'
      v-model='profile.email')
    .generic-window__input-container
      span(class='input-bar-text') Специальность
      input(class='generic-window__input-area input-bar-text' placeholder='...'
      v-model='profile.type')
    .generic-window__input-container
      span(class='input-bar-text') Github
      input(class='generic-window__input-area input-bar-text' placeholder='...'
      v-model='profile.github')
    .generic-window__input-container
      span(class='input-bar-text') Город
      input(class='generic-window__input-area input-bar-text' placeholder='...'
      v-model='profile.city')
    .generic-window__input-container
      span(class='input-bar-text') Телефон
      input(class='generic-window__input-area input-bar-text' :placeholder='profile.phone'
      v-model='profile.phone')
    .generic-window__input-container
      span(class='input-bar-text') День рождения
      input(class='generic-window__input-area input-bar-text' placeholder='...'
      v-model='profile.birthday')
    span(class='commit-text'
    @click='updateUser(profile)') Сохранить
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ProfileWindow',
  setup() {
    const store = useStore();
    return {
      authStatus: computed(() => store.getters['auth/getAuthStatus']),
      profile: computed(() => store.state.auth.profile),
      updateUser: (payload) => store.dispatch('auth/updateUser', payload),
    };
  },
};
</script>

<style lang='sass' scoped>
@use './style/textstyles'
@use './style/_generic-window'
</style>
