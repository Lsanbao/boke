export default {
    namespaced: true,
    state:{
      numA: 1
    },
    getters:{
      money(state){
        return state.numA*100
      }
    },
    mutations:{
      add(state){
        state.numA++
      }
    }
  }