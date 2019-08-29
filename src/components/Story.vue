<template lang="html">
  <div>
    <p
    v-for="s in story[round - 1].unlocked"

    >{{s}}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      story: state => state.story
    })
  },
  props: {
    round: Number
  }
}
</script>

<style lang="css" scoped>
</style>
