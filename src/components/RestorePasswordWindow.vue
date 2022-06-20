<template lang="pug">
.generic-window
  .generic-window__label Восстановление пароля
  .generic-window__input-container
    span(class='input-bar-text') Введите новый пароль
    input(class='generic-window__input-area input-bar-text' placeholder='...'
    v-model='payload.password')
  .generic-window__input-container
    span(class='input-bar-text') Повторите пароль
    input(class='generic-window__input-area input-bar-text' placeholder='...'
    v-model='payload.password_confirm')
</template>

<script>
export default {
  name: 'RestorePasswordWindow',
};
</script>

<style lang="sass" scoped>
@use './style/_textpresets'
@use './style/_generic-window'
</style>
