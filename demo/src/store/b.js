export default {
  namespaced: true,
  state:{
    numB: 1
  },
  getters:{
    money(state){
      return state.numB*1000
    }
  },
  mutations:{
    add(state){
        state.numB++
    }
  }
}