<template lang="pug">
.emp
  img(:src='image')
  span() {{ name }}
  router-link(:to="{ name: 'employee', params: { id: id }}") Открыть профиль
</template>

<script>
export default {
  name: 'EmpCard',
  props: {
    image: String,
    name: String,
    id: Number,
  },
};
</script>

<style lang="sass" scoped>
.emp
  width: 300px
  height: 430px
  margin: 15px 5px
  padding: 20px
  display: flex
  flex-direction: column
  border-left: 2px solid
</style>
