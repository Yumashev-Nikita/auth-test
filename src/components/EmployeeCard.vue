<template lang="pug">
.emp
  img(class='emp__image' :src='image')
  span(class='emp__name') {{ name }}
  router-link(class='emp__profile-link'
    :to="{ name: 'employee', params: { id: id }}") Открыть профиль
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
@use './style/_textpresets'
.emp
  width: 200px
  margin: 15px 0
  padding: 0 20px 20px 20px
  display: flex
  flex-direction: column
  border-left: 5px solid
  &__name
    @extend %maintypo
    @extend %h2semibold
    margin: 5px 0
  &__profile-link
    @extend %maintypo
    @extend %h2semibold
    color: #ff6969
    text-decoration: none
    margin: 5px 0
    &:hover
      color: #990000
</style>
