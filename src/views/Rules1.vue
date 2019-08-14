<template lang="html">
  <div>
    <b-container>
      <h2><strong>Rules</strong></h2>
      <ul>
        <li>Next Question unlocks only after you have answered the previous question, doesn't matter if it is right or wrong</li>
        <li>Right answer unlocks a flash card with more details and false answer does nothing</li>
        <li>There will be a hint for every question but taking hints reduces score</li>
        <li>Giving right ansers boosts the score</li>
        <li>Final question doesn't have any hints though there will be a retry with a heavy price for it. Two retries possible</li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  h2 {
    color: green;
  }
  ul li {
    text-align: left;
    font-size: 24px;
  }
</style>
