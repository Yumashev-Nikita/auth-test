<template lang='pug'>
.main-container
  EntryPoint
</template>

<script>
import EntryPoint from './components/EntryPoint.vue';

export default {
  name: 'App',
  components: {
    EntryPoint,
  },
};
</script>

<style scoped lang="sass">
.main-container
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: white
</style>
