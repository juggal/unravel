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
        <b-button class="btn" variant="outline-dark" @click="checkAnswer">Check</b-button>
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
      qno: 1,
      flag: false
    }
  },
  props: {
    round: Number,
    addPoint: Function,
    deductPoint: Function,
    noPoint: Function,
    final: Function,
    finalIndex: Number
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
    newCard: function() {
      this.updateFlag({val:true, round:this.round - 1});
      console.log("new card added");
    },
    toast: function (append = false, title, msg, color) {
        this.$bvToast.toast(msg, {
          title: title,
          autoHideDelay: 3000,
          appendToast: append,
          variant: color,
          solid: true
      })
    },
    nextQ: function () {
      if(this.qno < (this.index - 1)) {
        ++(this.qno);
      }
    },
    checkAnswer: function () {
      if(this.finalIndex === this.qno) {
        this.finalQ();
      }else {
        if(this.selected === this.answers[this.round - 1].ans[this.qno - 1] && this.selected != '') {
          this.addPoint(10); //add points
          this.newCard(); //add new card on correct answer
          this.toast(true, 'Congratulations', 'New card unlocked', 'success'); // display success message
          console.log("Right " + "Qno:" + this.qno);
        }else {
          console.log("Wrong");
        }
        this.nextQ(); // increments qno
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
        this.final(false);
        this.toast(true, 'Congratulations', 'Final Question Unlocked', 'success');
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
