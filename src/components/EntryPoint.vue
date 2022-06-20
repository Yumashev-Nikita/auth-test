<template lang='pug'>
.top-nav-bar
  .top-nav-bar__block-container
    router-link(to='/employees' class='top-nav-bar__block nav-bar-block-text rl-ns') Сотрудники
    router-link(v-if='!authStatus' to='/auth'
    class='top-nav-bar__block nav-bar-block-text rl-ns') Авторизация
    router-link(v-if='authStatus && profile !== undefined' to='/profile'
    class='top-nav-bar__block nav-bar-block-text rl-ns') {{ profile.name }}
<router-view></router-view>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'EntryPoint',
  setup() {
    const store = useStore();
    if (localStorage.getItem('authToken')) {
      store.commit('auth/PULL_PROFILE');
    }
    return {
      authStatus: computed(() => store.getters['auth/getAuthStatus']),
      profile: computed(() => store.state.auth.profile),
    };
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
    justify-content: center
    height: 100%
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
