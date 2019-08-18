<template lang="html">
  <b-container class="container">
    <carousel
    v-bind:perPage="1"
    navigationEnabled
    >
      <slide
        v-for="(text, i) in clues[round - 1].unlocked"
        v-bind:key="text"
        class="px-3"
        >
        <b-card
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 text-center"
           border-variant="danger"
        >
          <b-card-text>{{text}}</b-card-text>
        </b-card>
      </slide>
    </carousel>
  </b-container class="container">
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { mapState } from 'vuex';
export default {
  components: {
    Carousel,
    Slide
  },
  props:{
    round : Number
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'clues'
    ])
  }
}
</script>

<style lang="css" scoped>
  .container {
    width: 20%;
  }

</style>
