export default {
  setFlag: (state, data) => {
    console.log("set flag mutation");
    if(data.val === true) {
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
  },
  updateInfo:  (state, param) => {
    state.profiles[param.profno - 1].unlocked.push(...state.profiles[param.profno - 1].locked.splice(param.lock, 1));
  }
}
