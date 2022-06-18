<template lang="pug">
.employees-window-container
  .page-list
    span(class='arrow') &lt
    span(v-for='page in pages' :key='page'
    class='page-number page-number-text'
    @click='setPage(page)') {{ page }}
    span(class='arrow') >
  .employees
    EmployeeCard(v-for='employee in employees' :key='employee.id'
    :image='employee.image' :name='employee.name' :id='employee.id')
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import EmployeeCard from './EmployeeCard.vue';

export default {
  name: 'EmployeesWindow',
  components: {
    EmployeeCard,
  },
  setup() {
    const store = useStore();
    store.dispatch('employees/preFetchEmployees');
    return {
      setPage: (page) => store.dispatch('employees/setPage', page),
      employees: computed(() => store.getters['employees/getEmployees']),
      pages: computed(() => store.getters['employees/getPageAmount']),
    };
  },
};
</script>

<style lang="sass" scoped>
@use './style/_textpresets'
.employees-window-container
  width: 1060px
  margin: 100px auto
.employees
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
