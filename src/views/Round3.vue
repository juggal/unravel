<template lang="html">
  <div>
    <b-card no-body>
      <b-tabs
      active-nav-item-class="btn-info"
      pills card
      >
        <b-tab v-bind:title-link-class="'tab-color'" title="Characeter Profiles" active>
          <b-container class="container">
            <carousel
            v-bind:perPage="1"
            navigationEnabled
            >
              <slide
                v-for="info in profiles"
                class="px-5"
                >
                <b-card
                  tag="article"
                  style="max-width: 15rem"
                  class="mb-2 text-left"
                  border-variant="dark"
                >
                  <b-card-text>
                    <p>Name : {{ info.unlocked[0] }}</p>
                    <p>Country : {{ info.unlocked[1] }}</p>
                    <p>Designation : {{ info.unlocked[2] }}</p>
                    <p>Description : {{ info.unlocked[3] }}</p>
                    <!-- <p>Relation with killer : {{ info.unlocked[4] }}</p> -->
                  </b-card-text>
                </b-card>
              </slide>
            </carousel>
          </b-container>
        </b-tab>

        <b-tab v-bind:title-link-class="'tab-color'" title="Clues">
          <b-card-text><Cards v-bind:round="round" /></b-card-text>
        </b-tab>

        <b-tab v-bind:title-link-class="'tab-color'" title="Evidence">
          <b-list-group class="evidence">
            <b-list-group-item
            v-for="(item, i) in evidence.evdnc"
            :key="item"
            @click="unlock(evidence.tounlock[i], i)"
            >
            {{ item  }}
          </b-list-group-item>
          </b-list-group>
        </b-tab>

        <b-tab v-bind:title-link-class="'tab-color'" title="Final">
          <b-card><b-card-text>{{questions[round - 1].unlocked}}</b-card-text>
            <b-form-group>
              <b-form-radio
              v-for="(option, i) in options[round - 1].unlocked"
              v-bind:key="option"
              v-model="selected"
              v-bind:value="option"
              >
              {{ option }}</b-form-radio>
              <b-button class="btn" variant="outline-dark" @click="checkAnswer">Check</b-button>
            </b-form-group>
          </b-card>
        </b-tab>

        <template slot="tabs-end">
          <li class="point ml-auto">{{ points }}</li>
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { mapState, mapActions } from 'vuex'
import Cards from '../components/Cards'

export default {
  components: {
    Carousel,
    Slide,
    Cards
  },
  data() {
    return {
      selected: '',
      final: true,
      profileNo: 1,
      finalQ: 3,
      retry: 0,
      round: 3
    }
  },
  methods: {
    ...mapActions({
      setInfo: 'setInfo',
      updateFlag: 'updateFlag'
    }),
    changeFinal: function(val) {
      this.final = val;
    },
    checkAnswer: function () {
      if(this.selected === this.answers[3 - 1].ans && this.selected != '') {
        alert("Congratulations, You've Completed Round 3");
        this.$router.push('/');
        console.log("Right");
      }else {
        console.log("Wrong");
        if(this.retry >= 1) {
          this.setPoints({operation: 'sub', value:75});
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
    unlock: function(type, ival) {
      if(type === 'card') {
        this.updateFlag({val:true, round:(this.round - 1)});
        this.toast(true, 'Congratulations', 'New Card Unlocked', 'success');
      }else if(type === 'charprof') {
        this.setInfo({profno:1 , lock:2});
        this.toast(true, 'Congratulations', 'Character Profile Updated', 'info');
      }
      console.log(`${ival}`);
    }
  },
  computed: {
    ...mapState({
      questions: state => state.questions,
      options: state => state.options,
      answers: state => state.answers,
      profiles: state => state.profiles,
      evidence: state => state.evidence,
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
    margin-top: 1%;
  }
  .point {
    font-size:1.4rem;
    margin-top: 0.2%;
  }
  .container {
    width: 35%;
  }
  .evidence {
    width: 45%;
    margin-left: 30%;
  }
</style>
