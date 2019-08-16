<template lang="html">
  <b-container>
    <b-card
    v-for="(que, i) in questions"
    v-bind:key="que"
    
    >
    <b-card-text>{{que}}</b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
  props: {
    questions: Array
  }
}
</script>

<style lang="css" scoped>
</style>
