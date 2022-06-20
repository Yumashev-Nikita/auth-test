<template lang='pug'>
div(v-if='authStatus && profile !== undefined')
  .auth-window
    .auth-window__input-container
      span(class='input-bar-text') Логин
      input(class='auth-window__input-area input-bar-text' placeholder='...'
      v-model='profile.login')
    .auth-window__input-container
      span(class='input-bar-text') Имя
      input(class='auth-window__input-area input-bar-text' placeholder='...'
      v-model='profile.name')
    .auth-window__input-container
      span(class='input-bar-text') Почта
      input(class='auth-window__input-area input-bar-text' placeholder='...'
      v-model='profile.email')
    .auth-window__input-container
      span(class='input-bar-text') Специальность
      input(class='auth-window__input-area input-bar-text' placeholder='...'
      v-model='profile.type')
    .auth-window__input-container
      span(class='input-bar-text') Github
      input(class='auth-window__input-area input-bar-text' placeholder='...'
      v-model='profile.github')
    .auth-window__input-container
      span(class='input-bar-text') Город
      input(class='auth-window__input-area input-bar-text' placeholder='...'
      v-model='profile.city')
    .auth-window__input-container
      span(class='input-bar-text') Телефон
      input(class='auth-window__input-area input-bar-text' placeholder='...'
      v-model='profile.phone')
    .auth-window__input-container
      span(class='input-bar-text') День рождения
      input(class='auth-window__input-area input-bar-text' placeholder='...'
      v-model='profile.birthday')
    span(class='commit-text' @click='updateUser') Сохранить
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
      updateUser: () => store.dispatch('auth/updateUser'),
    };
  },
};
</script>

<style lang='sass' scoped>
@use './style/textstyles'

.auth-window
  margin: 100px auto
  padding: 50px
  width: 500px
  border-radius: 15px
  display: flex
  flex-direction: column
  justify-content: space-between
  &__input-container
    display: flex
    flex-direction: column
    justify-content: space-between
  &__label
    margin-bottom: 20px
  &__login
    margin: 10px 0
    max-height: 24px
    padding: 5px 5px
    border: 1px solid black
    border-radius: 7px
    resize: none
  &__input-area
    margin: 10px 0
    max-height: 24px
    padding: 5px 5px
    border: 1px solid black
    border-radius: 7px
    resize: none
</style>
