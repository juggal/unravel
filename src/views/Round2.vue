<template lang="html">
  <div>
    <b-card no-body>
      <b-tabs
      active-nav-item-class="btn-info"
      pills card
      >
        <b-tab v-bind:title-link-class="'tab-color'" title="Clues" v-bind:active="true">
          <b-card-text><Cards v-bind:round="round" /></b-card-text>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" title="Questions">
          <b-card-text><Questions v-bind:round="round" v-bind:addPoint="addPoints" v-bind:deductPoint="deductPoints" v-bind:noPoint="noPoints" v-bind:final="changeFinal" v-bind:finalIndex="finalQ" v-bind:addPts="40" v-bind:subPts="20" v-bind:retryVal="true" v-bind:timer="true"/></b-card-text>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" title="Final" v-bind:disabled="final">
          <b-card-text>{{questions[round - 1].unlocked[finalQ - 1]}}</b-card-text>
          <b-form-group>
            <b-form-radio
            v-for="(option, i) in options[round - 1].unlocked[finalQ - 1]"
            v-bind:key="option"
            v-model="selected"
            v-bind:value="option">
            {{option}}</b-form-radio>
            <b-button class="btn" variant="outline-dark" @click="checkAnswer">Check</b-button>
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
import { mapState, mapActions } from 'vuex'

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
      finalQ: 3
    }
  },
  methods: {
    ...mapActions({
      setPoints: 'setPoints'
    }),
    changeFinal: function(val) {
      this.final = val;
    },
    checkAnswer: function () {
      if(this.selected === this.answers[this.round - 1].ans[this.finalQ - 1] && this.selected != '') {
        this.setPoints({operation: 'add', value:200})
        this.toast(true, 'Congratulations', `You've Completed Round 2`, 'success');
        console.log("Right");
      }else {
        console.log("Wrong");
      }
    },
    toast: function (append = false, title, msg, color) {
        this.$bvToast.toast(msg, {
          title: title,
          autoHideDelay: 3000,
          appendToast: append,
          variant: color,
          solid: true
      })
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
