import Vue from 'vue'
import Vuex from 'vuex'
import Logger from 'vuex/dist/logger'

Vue.use(Vuex)
//引入模块
import timeline from './modules/tiemline'
import replyModal from './modules/replymodal'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    timeline,
    replyModal
  },
  plugins:[Logger()]
})
