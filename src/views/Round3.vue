<template lang="html">
  <div>
    <b-card no-body>
      <b-tabs
      active-nav-item-class="btn-info"
      pills card
      >
        <!-- <b-tab v-bind:title-link-class="'tab-color'" title="Clues" v-bind:active="true">
          <b-card-text><Cards v-bind:round="round" /></b-card-text>
        </b-tab> -->
        <b-tab v-bind:title-link-class="'tab-color'" title="Characeter Profiles">
          <b-container class="container">
            <carousel
            v-bind:perPage="1"
            navigationEnabled
            >
              <slide
                v-for="info in profiles"
                class="px-3"
                >
                <b-card
                  tag="article"
                  style="max-width: 20rem"
                  class="mb-2 text-center"
                  border-variant="dark"
                >
                  <b-card-text><p v-for="item in info.unlocked">{{item}}</p></b-card-text>
                </b-card>
              </slide>
            </carousel>
          </b-container>
        </b-tab>

        <b-tab v-bind:title-link-class="'tab-color'" title="Evidence">
          <b-list-group>

          </b-list-group>
        </b-tab>

        <!-- <b-tab v-bind:title-link-class="'tab-color'" title="Final">
          <b-card-text>{{questions[profileNo - 1].unlocked[finalQ - 1]}}</b-card-text>
          <b-form-group>
            <b-form-radio
            v-for="(option, i) in options[profileNo - 1].unlocked[finalQ - 1]"
            v-bind:key="option"
            v-model="selected"
            v-bind:value="option">
            {{option}}</b-form-radio>
            <b-button class="btn" variant="outline-dark" @click="checkAnswer">Check</b-button>
          </b-form-group>
        </b-tab> -->
        <template slot="tabs-end">
          <li class="point">{{ points }}</li>
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      selected: '',
      final: true,
      profileNo: 1,
      finalQ: 3,
      retry: 0
    }
  },
  methods: {
    ...mapActions({
      setInfo: 'setInfo'
    }),
    changeFinal: function(val) {
      this.final = val;
    },
    checkAnswer: function () {
      if(this.selected === this.answers[this.profileNo - 1].ans[this.finalQ - 1] && this.selected != '') {
        this.setPoints({operation: 'add', value:200})
        alert("Congratulations, You've Completed Round 3");
        this.$router.push('login');
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
    }
  },
  computed: {
    ...mapState({
      questions: state => state.questions,
      options: state => state.options,
      answers: state => state.answers,
      profiles: state => state.profiles,
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
    padding: 0.2rem 0 0 53rem;
  }
  .container {
    width: 35%;
    margin-top: 3%;
  }
</style>
