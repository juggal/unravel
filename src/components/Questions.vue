<template lang="html">
  <b-container
  class="container"
  >
    <b-card>
      <b-card-text>{{questions[round - 1].unlocked[qno - 1]}}</b-card-text>
      <b-form-group>
        <b-form-radio
        v-for="(option, i) in options[round - 1].unlocked[qno - 1]"
        v-bind:key="option"
        v-model="selected"
        v-bind:value="option">
        {{option}}</b-form-radio>
        <b-button class="btn" variant="outline-dark" @click="checkAnswer(); finalQ();">Check</b-button>
        <b-button class="btn" variant="outline-dark" @click="hint">Hints</b-button>
      </b-form-group>
    </b-card>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      selected: '',
      qno: 1
    }
  },
  props: {
    round: Number,
    addPoint: Function,
    deductPoint: Function,
    noPoint: Function,
    final: Function
  },
  computed: {
    ...mapState({
      questions: state => state.questions,
      options: state => state.options,
      answers: state => state.answers
    })
  },
  methods: {
    ...mapActions([
      'updateFlag'
    ]),
    test: function() {
      this.updateFlag({val:true, round:0});
      console.log("new card added");
    },
    newUnlocked: function (append = false) {
        this.$bvToast.toast('New Card Unlocked', {
          title: 'Congratulations',
          autoHideDelay: 3000,
          appendToast: append,
          variant: 'success',
          solid: true
      })
    },
    finalUnlocked: function (append = false) {
        this.$bvToast.toast('Final Q Unlocked', {
          title: 'Congratulations',
          autoHideDelay: 3000,
          appendToast: append,
          variant: 'success',
          solid: true
      })
    },
    checkAnswer: function () {
      if(this.selected === this.answers[this.round - 1].ans[this.qno - 1] && this.selected != '') {
        this.qno++;
        this.addPoint(10);
        this.test();
        this.newUnlocked(true);
        console.log("Right " + "Qno:" + this.qno);
      }else {
        console.log("Wrong");
        this.qno++;
      }
    },
    hint: function () {
      if(this.noPoint() >= 5) {
        this.deductPoint(5);
      }else {
        console.log("Hints insufficient");
      }
    },
    finalQ: function () {
      if(this.qno === 3) {
        this.final(false);
        this.finalUnlocked(true);
      }
    }
  }
}
</script>

<style lang="css" scoped>
 .container {
   width: 35%;
 }
 .btn {
   margin-left: 3%;
 }
</style>
