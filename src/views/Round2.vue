<template lang="html">
  <div>
    <Timer :Time="45 * 60" @end="clockEnd" />
    <b-card no-body>
      <b-tabs
      active-nav-item-class="btn-info"
      pills card
      >
        <!-- <b-tab v-bind:title-link-class="'tab-color'" title="Clues" v-bind:active="true">
          <b-card-text><Cards v-bind:round="round" /></b-card-text>
        </b-tab> -->
        <b-tab v-bind:title-link-class="'tab-color'" title="Story" v-bind:active="true">
          <Story :round="2"/>
        </b-tab>
        <b-tab v-bind:title-link-class="'tab-color'" title="Questions">
          <b-card-text><Questions v-bind:round="round" v-bind:final="changeFinal" v-bind:finalIndex="finalQ" v-bind:addPts="40" v-bind:subPts="20" v-bind:retryVal="true" v-bind:timer="true"/></b-card-text>
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
        <template slot="tabs-end">
          <li class="point ml-auto">Points:{{ points }}</li>
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import Questions from '../components/Questions'
import Story from '../components/Story'
import Timer from '../components/Timer'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Cards,
    Questions,
    Story,
    Timer
  },
  data() {
    return {
      selected: '',
      final: true,
      round: 2,
      finalQ: 6,
      retry: 0
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
        this.setPoints({operation: 'add', value:200});
        alert("Congratulations, You've Completed Round2");
        this.$router.push('rules3');
        console.log("Right");
      }else {
        console.log("Wrong");
        if(this.retry >= 1) {
          this.setPoints({operation: 'sub', value:75})
          this.toast(true, 'Oops', '75 points have been deducted', 'warning');
          ++(this.retry);
        }else {
          ++(this.retry);
        }
      }
    },
    toast: function (append = false, title, msg, color) {
        this.$bvToast.toast(msg, {
          title: title,
          autoHideDelay: 2000,
          appendToast: append,
          variant: color,
          solid: true
      })
    },
    clockEnd: function () {
      alert("Your time is over");
      this.$router.push('/');
    }
  },
  computed: {
    ...mapState({
      questions: state => state.questions,
      options: state => state.options,
      answers: state => state.answers,
      points: state => state.points
    })
  }
}
</script>

<style lang="css" scoped>
  .tab-color{
    color: black;
  }
  .btn {
    margin-left: 1%;
  }
  .point {
    font-size:1.4rem;
    padding: 0.2rem 0 0 0;
  }
</style>
