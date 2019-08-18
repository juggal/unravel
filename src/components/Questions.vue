<template lang="html">
  <b-container>
    <b-card
    v-for="(que, i) in questions[round - 1].active"
    v-bind:key="que"

    >
    <b-card-text>{{que}}</b-card-text>
    </b-card>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    round: Number
  },
  computed: {
    ...mapState([
      'questions'
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
