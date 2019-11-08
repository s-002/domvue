import {publishComment, publishReply} from '../../server/index'

const state={
    info:{},
    show:false
}
const mutations={
    //显示弹框
    showModal(state,payload){
        // console.log('replymodaljs',payload)
        state.info=payload.info;
        state.show=true
    },
    //隐藏弹框
    hideModal(state,payload){
        state.info={};
        state.show=false
    }
}
const actions={
    async reply({commit,state,dispatch},payload){
        console.log('payload...',payload,state.info)
        let data={}
        //判断是回复评论还是回复朋友圈
        if(state.info.type==='comment'){
            data=await publishComment({
                dynamicid:state.info.dynamicid,
                commentContent:payload
            })
        }
        else{
            data=await publishReply({
                toCommentReplyid:state.info.toCommentReplyid,
                replyContent:payload
            })
        }
        //刷新朋友圈
        await dispatch('timeline/getTimeline',null,{root:true})
        //隐藏弹框
        commit('hideModal')
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}