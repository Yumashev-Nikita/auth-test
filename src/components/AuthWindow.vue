<template lang='pug'>
.auth-window
  .auth-window__label.signIn-text Войти
  .auth-window__input-container
    span(class='input-bar-text') Логин
    input(class='auth-window__login input-bar-text' placeholder='...'
    v-model='login')
  .auth-window__input-container
    span(class='input-bar-text') Пароль
    input(class='auth-window__password input-bar-text' type='password' placeholder='...'
    v-model='password')
  .auth-window__input-container
    span(class='input-bar-text') Имя
    input(class='auth-window__password input-bar-text' placeholder='...'
    v-model='name')
  .auth-window__input-container
    span(class='input-bar-text') Почта
    input(class='auth-window__password input-bar-text' placeholder='...'
    v-model='email')
  .auth-window__input-container
    span(class='input-bar-text') Специальность
    input(class='auth-window__password input-bar-text' placeholder='...'
    v-model='type')
  .auth-window__input-container
    span(class='input-bar-text') Github
    input(class='auth-window__password input-bar-text' placeholder='...'
    v-model='github')
  .auth-window__input-container
    span(class='input-bar-text') Город
    input(class='auth-window__password input-bar-text' placeholder='...'
    v-model='city')
  .auth-window__input-container
    span(class='input-bar-text') Телефон
    input(class='auth-window__password input-bar-text' placeholder='...'
    v-model='phone')
  .auth-window__input-container
    span(class='input-bar-text') День рождения
    input(class='auth-window__password input-bar-text' placeholder='...'
    v-model='birthday')
  span(class='commit-text' @click='sendAuth') Подтвердить
</template>

<script>
export default {
  name: 'AuthWindow',
  data() {
    return {
      password: null,
      login: null,
      name: null,
      email: null,
      type: null,
      github: null,
      city: null,
      phone: null,
      birthday: null,
    };
  },
  methods: {
    async sendAuth() {
      const res = await fetch('https://test.atwinta.online/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          type: this.type,
          github: this.github,
          city: this.city,
          phone: this.phone,
          birthday: this.birthday,
        }),
      });
      console.log(res.body);
    },
  },
};
</script>

<style lang='sass' scoped>
@use './style/textstyles'

.auth-window
  margin: 200px auto
  padding: 50px
  width: 500px
  border: 2px solid black
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
  &__password
    margin: 10px 0
    max-height: 24px
    padding: 5px 5px
    border: 1px solid black
    border-radius: 7px
    resize: none
</style>
