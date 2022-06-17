<template lang='pug'>
.top-nav-bar
  .top-nav-bar__block-container
    router-link(to='/profile' class='top-nav-bar__block nav-bar-block-text rl-ns'
    @click='test_click') Профиль
    router-link(to='/emps' class='top-nav-bar__block nav-bar-block-text rl-ns') Сотрудники
    router-link(to='/auth' class='top-nav-bar__block nav-bar-block-text rl-ns') Авторизация
<router-view></router-view>
</template>

<script>
import auth from '../api/auth';

export default {
  name: 'EntryPoint',
  methods: {
    test_click: () => auth.getToken(),
  },
};
</script>

<style scoped lang="sass">
@use './style/textstyles'

.top-nav-bar
  position: fixed
  top: 0px
  left: 0px
  height: 50px
  width: 100%
  background-color: black
  &__block-container
    display: flex
    flex-direction: row
    height: 100%
    margin-left: 20px
    align-items: center
  &__block
    display: flex
    width: 140px
    height: 65%
    justify-content: center
    align-items: center
    margin: 0px 10px
.rl-ns
  text-decoration: none
</style>
