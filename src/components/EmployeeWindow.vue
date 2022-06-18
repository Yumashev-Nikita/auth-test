<template lang="pug">
.employee
  .employee__name {{ name }}
  .employee__image
    img(:src='image')
  .employee__data-line
    .employee__data-line_title Логин:
    .employee__data-line_data {{ login }}
  .employee__data-line
    .employee__data-line_title Email:
    .employee__data-line_data {{ email }}
  .employee__data-line
    .employee__data-line_title Должность:
    .employee__data-line_data {{ jobTitle }}
  .employee__data-line
    .employee__data-line_title Отдел:
    .employee__data-line_data {{ department_id }}
  .employee__data-line
    .employee__data-line_title Зачислен:
    .employee__data-line_data {{ startDate }}
  .employee__data-line
    .employee__data-line_title О себе:
    .employee__data-line_data {{ about }}
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'EmployeeWindow',
  setup() {
    const store = useStore();
    return {
      name: computed(() => store.getters['employee/getName']),
      image: computed(() => store.getters['employee/getImage']),
      login: computed(() => store.getters['employee/getLogin']),
      email: computed(() => store.getters['employee/getEmail']),
      jobTitle: computed(() => store.getters['employee/getJobTitle']),
      department_id: computed(() => store.getters['employee/getDepartmentId']),
      startDate: computed(() => store.getters['employee/getStartDate']),
      about: computed(() => store.getters['employee/getAbout']),
    };
  },
};
</script>

<style lang="sass" scoped>
.employee
  margin: 100px auto
</style>
