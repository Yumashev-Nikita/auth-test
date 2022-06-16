<template lang="pug">
.emp
  img(:src='image')
  span() {{ name }}
  router-link(:to='link') Открыть профиль
</template>

<script>
/* eslint-disable prefer-template */

export default {
  name: 'EmpCard',
  props: {
    image: String,
    name: String,
    id: Number,
  },
  data() {
    return {
      link: '/emps/' + this.id,
    };
  },
};
</script>

<style lang="sass" scoped>
.emp
  width: 300px
  height: 430px
  border-radius: 10px
  margin: 15px 5px
  padding: 20px
  box-shadow: 0px 0px 10px #c4c4c4
  display: flex
  flex-direction: column
</style>
