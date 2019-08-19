<template lang="html">
  <div>
    <b-card no-body>
      <b-tabs
      active-nav-item-class="btn-info"
      pills card
      >
        <b-tab v-bind:title-link-class="'tab-color'" title="Clues" active>
          <b-card-text><Cards v-bind:round="round" /></b-card-text>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" title="Questions">
          <b-card-text><Questions v-bind:round="round" v-bind:addPoint="addPoints" v-bind:deductPoint="deductPoints" v-bind:noPoint="noPoints" v-bind:final="changeFinal" v-bind:finalIndex="finalQ"/></b-card-text>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" title="Final" v-bind:disabled="final">
          <b-card-text>{{questions[round - 1].unlocked[finalQ]}}</b-card-text>
          <b-form-group>
            <b-form-radio
            v-for="(option, i) in options[round - 1].unlocked[finalQ]"
            v-bind:key="option"
            v-model="selected"
            v-bind:value="option">
            {{option}}</b-form-radio>
            <b-button class="btn" variant="outline-dark" @click="checkAnswer">Check</b-button>
            <b-button class="btn" variant="outline-dark" @click="hint">Hints</b-button>
          </b-form-group>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" :title="points"></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import Questions from '../components/Questions'
import { mapState } from 'vuex'

export default {
  components: {
    Cards,
    Questions
  },
  data() {
    return {
      selected: '',
      points: 50,
      final: true,
      round: 1,
      retry: 0,
      finalQ: 3
    }
  },
  methods: {
    addPoints: function (val) {
      this.points += val;
    },
    deductPoints: function (val) {
      this.points -= val;
    },
    noPoints: function () {
      return this.points;
    },
    changeFinal: function(val) {
      this.final = val;
    },
    checkAnswer: function () {
      if(this.selected === this.answers[this.round - 1].ans[this.finalQ] && this.selected != '') {
        this.addPoints(100);
        console.log("Right");
      }else {
        console.log("Wrong");
        if(this.retry >= 1) {
          this.deductPoints(50);
          ++(this.retry);
        }else {
          ++(this.retry);
        }
      }
    },
    hint: function () {
      if(this.noPoint() >= 5) {
        this.deductPoint(5);
      }else {
        console.log("Hints insufficient");
      }
    }
  },
  computed: {
    ...mapState({
      questions: state => state.questions,
      options: state => state.options,
      answers: state => state.answers
    })
  }
}
</script>

<style lang="css">
  .tab-color{
    color: black;
  }
  .btn {
    margin-left: 1%;
  }
</style>
