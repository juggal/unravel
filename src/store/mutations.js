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
    console.log("Update info mutation");
    for(let i = param.profno - 1; i < param.profno + 1; i++) {
      console.log(i);
      state.profiles[i].unlocked.push(...state.profiles[i].locked.splice(0, state.profiles[i].locked.length));
    }

  },
  updateStory: (state, param) => {
    console.log("update story mutation");
    if(param.val === true) {
      state.story[param.round - 1].unlocked.push(state.story[param.round - 1].locked.pop());
    }
  }
}
