import {showDynamic,sendWord,sendPicWord} from '../../server/index'

const state={
    list:[]
}
const mutations = {
    updateList(state, payload){
        state.list = payload.reverse();
    }
}

const actions = {
    //获取朋友圈列表
    async getTimeline(context, payload){
        let data = await showDynamic();
        console.log('data....', data);
        context.commit('updateList', data.data.data);
    },

    //发表朋友圈
    async postTimeline({state,commit},payload){
        let data =await sendWord({dynamicContent:payload});
        console.log('postdata',data)
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}