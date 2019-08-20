<template lang="html">
  <div id="timer">
    <span id="minutes">{{ minutes }}</span>
    <span id="middle">:</span>
    <span id="seconds">{{ seconds }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: null,
      minutes: null,
      seconds: null,
      totalTime: this.Time
    }
  },
  props: {
    Time: Number
  },
  methods: {
    startTimer: function () {
      this.timer = setInterval(() => this.countdown(), 1000);
    },
    stopTimer: function() {
      clearInterval(this.timer);
      // this.reset(this.again);
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      this.minutes = parseInt(this.totalTime / 60, 10);
      this.seconds = parseInt(this.totalTime % 60, 10);
      if(this.totalTime > -1){
        this.totalTime--;
      }else {
        this.stopTimer();
        this.$emit('end');
      }
    }
    // reset: function() {
    //   if(this.again) {
    //     console.log("Restarting timer");
    //     minutes = null;
    //     seconds = null;
    //     this.again = false
    //     this.startTimer();
    //   }
    // }
  },
  mounted() {
    this.$emit('start');
    this.startTimer();
  }
}
</script>

<style lang="css" scoped>
  #timer {
  font-size: 50px;
  line-height: 1;
  margin-bottom: 40px;
  }
</style>
