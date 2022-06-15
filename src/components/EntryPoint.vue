<template lang='pug'>
.top-nav-bar
  .top-nav-bar__block-container
    router-link(to='/profile' class='top-nav-bar__block nav-bar-block-text rl-ns') Профиль
    router-link(to='/emps' class='top-nav-bar__block nav-bar-block-text rl-ns') Сотрудники
    router-link(to='/auth' class='top-nav-bar__block nav-bar-block-text rl-ns') Авторизация
<router-view></router-view>
</template>

<script>
/* eslint-disable prefer-template */

import { computed } from 'vue';
import { useStore } from 'vuex';
// 6pYIYy5wCN
export default {
  name: 'EntryPoint',
  setup() {
    const store = useStore();
    return {
      getNavPoint: computed(() => store.getters['navbar/getNavPoint']),
    };
  },
  methods: {
    test_click: (async () => {
      const res = await fetch('https://test.atwinta.online/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'libradrago79@gmail.com',
          password: '6pYIYy5wCN',
        }),
      });
      const data = await res.json();
      const token = await data.token;
      console.log(token);
      const department = await fetch('https://test.atwinta.online/api/v1/departments', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      const deptData = await department.json();
      console.log(deptData);
    }),
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
