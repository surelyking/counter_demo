import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 只有 mutations 中的函数才可以修改 state 中的函数
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state){
      state.count--
    },
    subN(state,step){
      state.count -= step
    }
  },
  actions: {
    addAsync(context){
      setTimeout(() => {
        //在 action 中不能直接修改 state 中的数据
        //必须通过 context.commit()触发某个 mutation 才行
        context.commit('add')
      }, 1000);
    },
    addNAsync(context,step){
      setTimeout(() => {
        context.commit('addN',step)
      }, 1000);
    },
    subAsync(context){
      setTimeout(() => {
        context.commit('sub')
      }, 1000);
    },
    subNAsync(context,step){
      setTimeout(() => {
        context.commit('subN',step)
      }, 1000);
    }
  },
  modules: {},
  getters:{
    showNum(state){
      return '当前最新的数量【' +state.count + '】'
    }
  }
})
