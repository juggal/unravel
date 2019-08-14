<template lang="html">
  <div>
    <carousel
    autoplay
    perPage="1"
    easing
    >
      <slide
        v-for="(text, i) in texts"
        v-bind:key="text"
        >
        <b-card
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 text-center"
           bg-variant="dark"
           text-variant="white"
           v-bind:header="`Card  ` + parseInt(i + 1)"
        >
          <b-card-text>{{text}}</b-card-text>
        </b-card>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      texts: [
        `Some quick example 1`,
        `Some quick example 2`
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
