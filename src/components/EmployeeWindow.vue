<template lang="pug">
div(v-if='employee !== undefined')
  .employee
    .table-container
      table
        tr
          td
            .employee__image
              img(:src='employee.image' width='375' height='375')
          td
            .data-container
              .employee__name {{ employee.name }}
              .employee__data-line
                .employee__data-line_title Логин:
                .employee__data-line_data {{ employee.login }}
              .employee__data-line
                .employee__data-line_title Email:
                .employee__data-line_data {{ employee.email }}
              .employee__data-line
                .employee__data-line_title Должность:
                .employee__data-line_data {{ employee.worker.position }}
              .employee__data-line
                .employee__data-line_title Отдел:
                .employee__data-line_data {{ employee.worker.department }}
              .employee__data-line
                .employee__data-line_title Зачислен:
                .employee__data-line_data {{ employee.worker.adopted_at }}
              .employee__data-line
                .employee__data-line_title О себе:
                .employee__data-line_data {{ employee.about }}
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  name: 'EmployeeWindow',
  setup() {
    const store = useStore();
    const route = useRoute();
    store.commit('employee/PULL_EMPLOYEE', route.params.id);
    return {
      employee: computed(() => store.getters['employee/getEmployee']),
    };
  },
};
</script>

<style lang="sass" scoped>
@use './style/_textpresets'
.employee
  margin: 100px auto
  width: 1000px
  &__name
    @extend %maintypo
    @extend %h1semibold
    margin-bottom: 15px
  &__image
    margin-right: 50px
  &__data-line
    margin: 5px 0
    &_title
      @extend %maintypo
      @extend %h2semibold
    &_data
      @extend %maintypo
      @extend %text-normal
.table-container
  margin-top: 30px
.data-container
  border-left: 3px solid
  padding-left: 20px
  min-height: 300px
</style>
