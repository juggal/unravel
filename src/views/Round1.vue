<template lang="html">
  <div>
    <b-card no-body>
      <b-tabs
      active-nav-item-class="btn-info"
      pills card
      >
        <b-tab v-bind:title-link-class="'tab-color'" title="Clues" active>
          <b-card-text><Cards v-bind:texts="texts" /></b-card-text>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" title="Questions">
          <b-card-text><Questions v-bind:questions="questions"/></b-card-text>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" title="Final" disabled>
          <b-card-text>Tab Contents 2</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import Questions from '../components/Questions'
export default {
  components: {
    Cards,
    Questions
  },
  data() {
    return {
      texts: [
        `Some quick example 1`,
        `Some quick example 2`
      ],
      questions: [
        `First`,
        `second`
      ]
    }
  }
}
</script>

<style lang="css">
  .tab-color{
    color: black;
  }
</style>
