<template lang='pug'>
.auth-window
  .auth-window__label.signIn-text Войти
  .auth-window__input-container
    span(class='input-bar-text') Логин
    textarea(class='auth-window__login input-bar-text' placeholder='Ваш логин'
    v-model='name')
  .auth-window__input-container
    span(class='input-bar-text') Пароль
    textarea(class='auth-window__password input-bar-text' placeholder='Ваш пароль'
    v-model='password')
  span(class='commit-text' @click='sendAuth') Подтвердить
</template>

<script>
export default {
  name: 'AuthWindow',
  data() {
    return {
      password: '',
      login: '',
      name: '',
      email: '',
      type: '',
      github: '',
      city: '',
      phone: '',
      birthday: '',
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
          email: 'umashev58@gmail.com',
          type: 'front',
          github: 'https://github.com/Yumashev-Nikita',
          city: 'Кемерово',
          phone: '9964150932',
          birthday: '05.06.2001',
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
