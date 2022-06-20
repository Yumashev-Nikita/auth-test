<template lang='pug'>
.generic-window
  .generic-window__label.signIn-text Войти
  .generic-window__input-container
    span(class='input-bar-text') Логин
    input(class='generic-window__input-area input-bar-text' placeholder='...'
    v-model='email')
  .generic-window__input-container
    span(class='input-bar-text') Пароль
    input(class='generic-window__input-area input-bar-text' placeholder='...'
    v-model='password')
  span(class='commit-text' @click='login({ email, password })') Подтвердить
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'AuthWindow',
  data() {
    return {
      email: undefined,
      password: undefined,
    };
  },
  setup() {
    const store = useStore();
    return {
      login: (payload) => store.dispatch('auth/login', payload),
    };
  },
};
</script>

<style lang='sass' scoped>
@use './style/textstyles'
@use './style/_generic-window'
</style>
