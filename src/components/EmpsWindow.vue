<template lang="pug">
.emps
  div(v-for="emp in emps" :key="emp.id" class='emps__emp') {{ emp.id }}
  span() {{ page }}
</template>

<script>
/* eslint-disable prefer-template */
/* eslint-disable prefer-destructuring */

import { computed } from 'vue';
import { useStore } from 'vuex';
import EmpCard from './EmpCard.vue';
import auth from '../api/auth';

export default {
  name: 'EmpsWindow',
  components: {
    EmpCard,
  },
  data() {
    return {
      pos_id: '',
      dept_id: '',
      emps: {},
    };
  },
  async setup() {
    const store = useStore();
    const page = computed(() => store.state.emps.page);
    console.log(page.value);
    const token = await auth.getToken();
    const res = await fetch('https://test.atwinta.online/api/v1/workers?page=' + page.value, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
    const empList = await res.json();
    console.log(await empList);
    this.emps = await empList.data;
    console.log(await this.emps);
    return {
    };
  },
};
</script>

<style lang="sass" scoped>
.emps
  display: flex
  flex-wrap: wrap
  justify-content: center
  flex-direction: row
  width: 980px
  margin: 100px auto
  &__emp
    width: 300px
    height: 430px
    border: 1px solid
    margin: 10px 10px
    // box-shadow: -10px 5px 10px #c4c4c4
</style>
