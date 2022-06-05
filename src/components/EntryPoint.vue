<template lang='pug'>
.top-nav-bar
  .top-nav-bar__block-container
    .top-nav-bar__block
      router-link(to='/profile' class='.top-nav-bar__block block-text rl-ns') Профиль
    .top-nav-bar__block
      router-link(to='/emps' class='.top-nav-bar__block block-text rl-ns') Сотрудники
    .top-nav-bar__block
      router-link(to='/auth' class='.top-nav-bar__block block-text rl-ns') Авторизация
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'EntryPoint',
  setup() {
    const store = useStore();
    return {
      getNavPoint: computed(() => store.getters['navbar/getNavPoint']),
    };
  },
};
</script>

<style scoped lang="sass">
@use './style/textstyles'

.top-nav-bar
  position: fixed
  top: 5px
  left: 5px
  width: 99.3%
  height: 50px
  background-color: #354259
  border-radius: 15px
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
    border: 2px solid #C2DED1
    border-radius: 15px
    cursor: pointer
    transition: background-color .5s
    user-select: none
  &__block:hover
    background-color: #C2DED1
.rl-ns
  text-decoration: none
</style>
