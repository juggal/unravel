<template lang="html">
  <div>
    <b-card no-body>
      <b-tabs
      active-nav-item-class="btn-info"
      pills card
      >
        <b-tab v-bind:title-link-class="'tab-color'" title="Clues" active>
          <b-card-text><Cards v-bind:round="1" /></b-card-text>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" title="Questions">
          <b-card-text><Questions v-bind:round="1"/></b-card-text>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" title="Final" disabled>
          <b-card-text>Tab Contents 2</b-card-text>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" title="test"><b-button variant="outline-success" @click="test">Add</b-button></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import Questions from '../components/Questions'
import { mapActions } from 'vuex'
export default {
  components: {
    Cards,
    Questions
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions([
      'updateFlag'
    ]),
    test: function() {
      this.updateFlag({val:true, round:0});
      console.log("Clicked");
    }
  }
}
</script>

<style lang="css">
  .tab-color{
    color: black;
  }
</style>
