<template lang="html">
  <b-container
  class="container"
  v-if="qno != finalIndex"
  >
  <!-- <Timer :Time="5 * 60" v-if="timer" @end="clockEnd"  :again="flag" /> -->
    <b-card>
      <b-card-text>{{questions[round - 1].unlocked[qno - 1]}}</b-card-text>
      <b-form-group>
        <b-form-radio
        v-for="(option, i) in options[round - 1].unlocked[qno - 1]"
        v-bind:key="option"
        v-model="selected"
        v-bind:value="option"
        plain>
        {{option}}</b-form-radio>
        <b-button class="btn" variant="outline-dark" @click="checkAnswer">Check</b-button>
        <b-button class="btn" variant="outline-dark" @click="hinted">Hints</b-button>
      </b-form-group>
    </b-card>
  </b-container>
</template>

<script>
import Timer from './Timer';
import { mapState, mapActions } from 'vuex';
export default {
  components:{
    Timer
  },
  data() {
    return {
      selected: '',
      qno: 1,
      retry: 0,
      flag: null
    }
  },
  props: {
    round: Number,
    final: Function,
    finalIndex: Number,
    retryVal: Boolean,
    addPts: Number,
    subPts: Number,
    timer: Boolean
  },
  computed: {
    ...mapState({
      questions: state => state.questions,
      options: state => state.options,
      answers: state => state.answers,
      points: state => state.points,
      hints: state => state.hints
    })
  },
  methods: {
    ...mapActions({
      updateFlag: 'updateFlag',
      setPoints: 'setPoints',
      setStory: 'setStory'
    }),
    newCard: function() {
      this.updateFlag({val:true, round:this.round - 1});
    },
    toast: function (append = false, title, msg, color) {
        this.$bvToast.toast(msg, {
          title: title,
          autoHideDelay: 6000,
          appendToast: append,
          variant: color,
          solid: true
      })
    },
    checkAnswer: function () {
        if(this.selected === this.answers[this.round - 1].ans[this.qno - 1] && this.selected != '') {
          this.setPoints({operation:'add', value:this.addPts}); //add points
          this.newCard(); //add new card on correct answer
          this.setStory({val: true, round: this.round}); //add new part of story
          this.toast(true, 'Congratulations', 'New story unlocked', 'success'); // display success message
          this.flag = false;
          this.flag = true;
          console.log("Right " + "Qno:" + this.qno);
        }else {
          console.log("Wrong " + "Qno:" + this.qno);
        }
        ++(this.qno); // increments qno
        this.finalQ();
        // this.flag = false;
    },
    hinted: function () {
      if(this.points >= 5) {
        this.setPoints({operation:"sub", value:5});
        this.toast(true, 'Hint', `${this.hints[this.round - 1][this.qno - 1]}`, 'info');
      }else {
        console.log("Hints insufficient");
      }
    },
    finalQ: function () {
      if(this.qno === this.finalIndex) {
        this.final(false);
        this.toast(true, 'Congratulations', 'Final Question Unlocked', 'success');
      }
    },
    clockEnd: function() {
      if(confirm("Press OK to retry!")) {
        this.setPoints({operation: "sub", value:this.subPts});
        this.flag = false;
        this.flag = true;
        console.log("Retry");
      }else {
        ++(this.qno);
        this.finalQ();
        console.log("Next question");
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
