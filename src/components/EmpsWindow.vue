<template lang="pug">
div(class='test' @click='change_page') press
router-link(class='test' :to="{ name: 'emps', params: { page: 8 }}") press
.emps
  EmpCard(v-for='emp in emps' :key='emp.id' :image='emp.image' :name='emp.name' :id='emp.id')
</template>

<script>
/* eslint-disable prefer-template */
/* eslint-disable prefer-destructuring */

// import { computed } from 'vue';
import { useStore } from 'vuex';
import EmpCard from './EmpCard.vue';
import auth from '../api/auth';

export default {
  name: 'EmpsWindow',
  components: {
    EmpCard,
  },
  props: {
    page: Number,
  },
  data() {
    return {
      pos_id: '',
      dept_id: '',
      emps: {},
    };
  },
  setup() {
    const store = useStore();
    return {
      change_page: (() => store.commit('emps/LIST_PAGE')),
    };
  },
  async mounted() {
    const token = await auth.getToken();
    const res = await fetch('https://test.atwinta.online/api/v1/workers?page=' + this.page, {
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
.test
  width: 20px
  height: 20px
  border: 1px solid
  color: black
  margin-top: 100px
  z-index: 2
.emps
  display: flex
  flex-wrap: wrap
  justify-content: center
  flex-direction: row
  width: 1060px
  margin: 100px auto
</style>
