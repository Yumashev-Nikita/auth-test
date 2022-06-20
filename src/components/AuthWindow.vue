<template lang='pug'>
.auth-window
  .auth-window__label.signIn-text Войти
  .auth-window__input-container
    span(class='input-bar-text') Логин
    input(class='auth-window__input-area input-bar-text' placeholder='...'
    v-model='email')
  .auth-window__input-container
    span(class='input-bar-text') Пароль
    input(class='auth-window__input-area input-bar-text' placeholder='...'
    v-model='password')
  span(class='commit-text' @click='login({ email, password })') Подтвердить
</template>

<script>
//  import { computed } from 'vue';
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
  &__input-area
    margin: 10px 0
    max-height: 24px
    padding: 5px 5px
    border: 1px solid black
    border-radius: 7px
    resize: none
</style>
