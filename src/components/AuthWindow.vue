<template lang='pug'>
.auth-window
  .auth-window__label.signIn-text Войти
  .auth-window__input-container
    span(class='input-bar-text') Логин
    input(class='auth-window__login')
  .auth-window__input-container
    span(class='input-bar-text') Пароль
    input(class='auth-window__password')
</template>

<script>
export default {
  name: 'AuthWindow',
};
</script>

<style lang="sass" scoped>
@use './style/textstyles'

.auth-window
  margin: 200px auto
  padding: 50px
  width: 500px
  height: 200px
  border: 2px solid black
  border-radius: 15px
  display: flex
  flex-direction: column
  justify-content: space-between
  &__input-container
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 60px
  &__label
  &__login
    height: 20px
  &__password
    height: 20px
</style>
