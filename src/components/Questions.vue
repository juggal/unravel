<template lang="html">
  <b-container
  class="container"
  >
    <b-card
    v-for="(que, i) in questions[round - 1]"
    v-bind:key="que"
    v-bind:title="i + 1"
    >
      <b-card-text>{{que.active[0].question}}</b-card-text>
      <b-form-group>
        <b-form-radio
        v-for="(option, i) in questions[round - 1].active[0].options"
        v-bind:key="option"
        v-model="selected">
        {{option}}</b-form-radio>
        <b-button variant="outline-dark">Check</b-button>
      </b-form-group>
    </b-card>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      selected: '',
      options: [
        "option1",
        "option2"
      ]
    }
  },
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
 .container {
   width: 35%;
 }
</style>
