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
      duration: this.Time
    }
  },
  props: {
    Time: Number,
    again: Boolean
  },
  methods: {
    startTimer: function () {
      this.timer = setInterval(() => this.countdown(), 1000);
    },
    stopTimer: function() {
      clearInterval(this.timer);
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      if(this.duration <= 0){
        this.$emit('end');
        this.reset();
      }
      this.minutes = parseInt(this.duration / 60, 10);
      this.seconds = parseInt(this.duration % 60, 10);
      --(this.duration);
    },
    reset: function() {
        console.log("Restarting timer");
        clearInterval(this.timer);
        this.minutes = null;
        this.seconds = null;
        this.duration = this.Time;
        this.startTimer();
    }
  },
  mounted() {
    this.$emit('start');
    this.startTimer();
  },
  watch: {
    again: function() {
        if(this.again) {
        this.reset();
      }
    }
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
