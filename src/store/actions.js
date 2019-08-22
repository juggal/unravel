export default {
  updateFlag: ({ commit }, data) => {
    commit('setFlag', data);
  },
  setPoints: ({ commit }, param) => {
    commit('updatePoints', param);
  },
  setInfo: ({ commit }, param) => {
    commit('updateInfo', param);
  }
}
