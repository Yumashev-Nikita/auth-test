<template lang="pug">
.page-list
  span(class='page-number page-number-text' v-for='page in pages' :key='page'
  @click='setPage(page)') {{ page }}
.emps
  EmpCard(v-for='emp in emps' :key='emp.id' :image='emp.image' :name='emp.name' :id='emp.id')
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import EmpCard from './EmpCard.vue';

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
      pages: 1,
    };
  },
  async mounted() {
    const store = useStore();
    this.emps = await store.getters['emps/getEmps'];
    this.pages = await store.getters['emps/getPageAmount'];
    return {
    };
  },
  setup() {
    const store = useStore();
    return {
      setPage: (page) => store.commit('emps/SET_PAGE', page),
      page: computed(() => store.getters['emps/getPage']),
    };
  },
};
</script>

<style lang="sass" scoped>
@use './style/_textpresets'
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
.page-list
  margin: 60px 0
.page-number
  margin: 10px 5px
.page-number-text
  @extend %maintypo
  @extend %h2semibold
  color: black
</style>
