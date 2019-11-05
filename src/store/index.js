import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pushlist:[]
  },
  mutations: {
   addlist(state,list){
    const pushs=state.pushlist.find(item=>item.id===list.id)
    if(pushs){
      pushs.num1++
    }else{
     state.pushlist.push({
        name:list.name,
        titel:list.titel,
        id:list.id,
        num1:1
      })
    }
   },
   remove(state,index){
     if(state.pushlist[index].num1<=0){
       window.confirm('确定要删除？')
      state.pushlist.splice(index,1)
     }else{
      state.pushlist[index].num1--
     }
     
   },
   add(state,index){
    ++state.pushlist[index].num1
   }
  },
  actions: {
  },
  modules: {
  },
  getters:{

  }
})
