<!--  -->
<template>
    <div class="timeline">
        <div class="iptdiv">
            <router-link to="/post" tag='span'>发表</router-link>
            <input type="text" name="" id="" placeholder="试试搜索你的好友名字">
        </div>
        <div class="center">
            <li class="cont" v-for="item in list" :key="item.dynamicid">
                <div class="Ttop">
                    <img src="../../assets/1.jpg" alt="" class="img">
                    <div class="name">
                        <p>{{item.userName}}</p>
                        <p>2019-06-01</p>
                    </div>
                </div>
                <div class="Tmain">
                 {{item.dynamicContent}}   
                </div>
                <div class="Tfooter">
                    <p class="action">
                        <span>点赞</span>
                        <span @click="reply(item)">{{`评价${item.comments.length}`}}</span>
                    </p>
                </div>
                <Reply :reply="item.comments" />
            </li>
        </div>
        <reply-modal/>
    </div>
</template>

<script>
import Reply from '../../components/reply.vue'
import ReplyModal from '../../components/replyModal'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  data () {
    return {
     
    }
  },
 computed: {
     ...mapState({
         list:state=>state.timeline.list
     })
 },
 methods:{
     ...mapActions({
         getTimeline:'timeline/getTimeline'
     }),
     ...mapMutations({
         showModal:'replyModal/showModal'
     }),
      reply(value){
          this.replyInfo={
              type:'comment',//判断是要评论朋友圈还是回复朋友圈
              dynamicid:value.dynamicid,//朋友圈的id
              content:'',
              title:`评价：${value.userName}`
          }
        //   console.log('reply',this.replyInfo)
          this.showModal({
              info:this.replyInfo,
              show:true
          })
      }
 },
 created(){
     this.getTimeline();
 },
 components:{
     Reply,
     ReplyModal
 }
}

</script>
<style lang='scss' scoped>
.iptdiv{
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    span{
        flex: 2;
        font-size: .35rem;
    }
    input{
        flex: 8;
        background: #eee;
        border:0;
        height: 30px;
        margin-top:5px;
        font-size: .3rem;
        border-radius: 20px;
        text-align: center;
        outline: none;
    }
}
.center{
    height: 560px;
    overflow: scroll;
    padding:.2rem .3rem;
    &>li{
        margin-bottom: .5rem;
    }
}
.timeline-center-top-top{
    font-size: .4rem;
}
.cont{
    width: 100%;
    font-size: .28rem;
    border-bottom: 1px solid #666
}
.Ttop{
    width: 100%;
    height: 1rem;
//    background: #ccc
}
.img{
    width: 40px;
    height: 40px;
    float: left;
    margin-right: .2rem;
    border-radius: 50%;
    // background: gold;
}
.Tfooter{
    width: 100%;
    // height: .5rem;
    font-size: .28rem;
    // line-height: .5rem;
    .action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: .2rem 0;
    }
}
</style>