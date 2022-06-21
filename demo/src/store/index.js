import { createStore } from 'vuex'
import axios from 'axios'
import a from './a'
import b from './b'
export default createStore({
  state: {
    obj:{},
  },
  mutations: {
    save(state,val){
      state.obj = val
    }
  },
  actions: {
    // async   await 是成对出现的，把异步变成同步
   async getData({commit},state){
      // console.log(ctx);
      // axios.get('data.json').then(res => {
      //   // console.log(res);
      //   commit('save',res.data)
      // })
      // console.log(1);



      // 等待的意思
      let { data } = await axios.get('data.json')
      commit('save',data)
      // console.log(data);
      // console.log(1);
    }
  },
  modules: { // 模块化
    a1:a,
    b1:b
  }
})
