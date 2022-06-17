<template lang="pug">
.page-list
  span(v-for='page in pages' :key='page'
  class='page-number page-number-text'
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
  setup() {
    const store = useStore();
    store.dispatch('preFetchEmployees');
    store.dispatch('preFetchPages');
    return {
      setPage: (page) => store.dispatch('setPage', page),
      emps: computed(() => store.state.employees.employees),
      pages: computed(() => store.state.employees.pages),
    };
  },
};
</script>

<style lang="sass" scoped>
@use './style/_textpresets'
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
