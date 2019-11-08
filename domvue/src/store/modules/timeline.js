import {showDynamic} from '../../server/index'

const state={
    list:[]
}
const mutations = {
    updateList(state, payload){
        state.list = payload;
    }
}

const actions = {
    //获取朋友圈列表
    async getTimeline(context, payload){
        let data = await showDynamic();
        console.log('data....', data);
        context.commit('updateList', data.data.data);
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}