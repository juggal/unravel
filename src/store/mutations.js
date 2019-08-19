export default {
  setFlag: (state, data) => {
    console.log("set flag mutation");
    if(data.val === true && state.clues[data.round].locked.length != data.round) {
      state.clues[data.round].unlocked.push(state.clues[data.round].locked.pop());
    }
  },
  updatePoints: (state, param) => {
    console.log("update points mutation ");
    if(param.operation === 'add') {
      state.points += param.value;
      console.log("points added");
    }else if(param.operation === 'sub') {
      state.points -= param.value;
    }
  }
}
