<template lang="pug">
.emps-window-container
  .page-list
    span(class='arrow') &lt
    span(v-for='page in pages' :key='page'
    class='page-number page-number-text'
    @click='setPage(page)') {{ page }}
    span(class='arrow') >
  .emps
    EmployeeCard(v-for='emp in emps' :key='emp.id' :image='emp.image' :name='emp.name' :id='emp.id')
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import EmployeeCard from './EmployeeCard.vue';

export default {
  name: 'EmpsWindow',
  components: {
    EmployeeCard,
  },
  setup() {
    const store = useStore();
    store.dispatch('employees/preFetchEmployees');
    return {
      setPage: (page) => store.dispatch('employees/setPage', page),
      emps: computed(() => store.getters['employees/getEmployees']),
      pages: computed(() => store.getters['employees/getPageAmount']),
    };
  },
};
</script>

<style lang="sass" scoped>
@use './style/_textpresets'
.emps-window-container
  width: 1060px
  margin: 100px auto
.emps
  display: flex
  flex-wrap: wrap
  flex-direction: row
.page-list
  margin: 60px 0
.page-number
  margin: 10px 5px
.page-number-text
  @extend %maintypo
  @extend %h1semibold
  color: black
  cursor: pointer
  &:hover
    color: gray
.arrow
  @extend %maintypo
  @extend %h1semibold
  color: black
  cursor: pointer
  &:hover
    color: gray
</style>
