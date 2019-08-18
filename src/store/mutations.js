export default {
  setFlag: (state, data) => {
    if(data.val === true && state.clues[data.round].locked.length != data.round) {
      state.clues[data.round].unlocked.push(state.clues[data.round].locked.pop())
      console.log("new card added");
    }
  }
}
