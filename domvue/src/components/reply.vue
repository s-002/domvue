<!--  -->
<template>
    <div>
        <li v-for="value in reply" :key="value.commentRelyid">
            <p class="reply" @click="showReply(value)">
                <span class="commenter">{{replyName?`${value.userName} to ${replyName}`:value.userName}}:</span>
                <span>{{value.commentContent?value.commentContent:value.replyContent}}</span>
            </p>
            <reply :reply="value.replys" :replyName="value.userName"/>
        </li>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name:'reply',
  data () {
    return {
        replyInfo:{
            type:'comment',
            dynamicid:'',
            toCommentReplyid:'',
            content:'',
            title:''
        },
        show:false
    };
  },
    props:{
        reply:{
            type:Array,
            default:()=>{return []}
        },
        replyName:{
            type:String,
            default:''
        }
    },
  methods: {
      ...mapMutations({
          showModal:'replyModal/showModal'
      }),
      showReply(value){
          this.replyInfo={
              type:'reply',
              dynamicid:value.dynamicid,
              toCommentReplyid:value.commentReplyid,
              content:'',
              title:value.commentContent?`评价：${value.userName}`:`回复：${value.userName}`
          }
        //   console.log('reply',this.replyInfo)
          this.showModal({
              info:this.replyInfo,
              show:true
          })
      }
  }
}

</script>
<style lang='scss' >
    .commenter{
        color: hotpink;
    }
    .reply{
        margin: .1rem 0;
    }
</style>