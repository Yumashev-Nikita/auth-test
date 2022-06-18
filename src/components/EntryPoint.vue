<template lang='pug'>
.top-nav-bar
  .top-nav-bar__block-container
    router-link(to='/profile' class='top-nav-bar__block nav-bar-block-text rl-ns') Профиль
    router-link(to='/employees' class='top-nav-bar__block nav-bar-block-text rl-ns') Сотрудники
    router-link(to='/auth' class='top-nav-bar__block nav-bar-block-text rl-ns') Авторизация
<router-view></router-view>
</template>

<script>

export default {
  name: 'EntryPoint',
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
    width: 450px
    height: 100%
    margin: auto
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
