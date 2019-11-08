<!--  -->
<template>
    <div>
        <div class="iptdiv">
            <input type="text" name="" id="" placeholder="试试搜索你的好友名字">
        </div>
        <div class="center">
            <li class="cont">
                <div class="Ttop">
                    <img src="../../assets/1.jpg" alt="" class="img">
                    <div class="name">
                        <p>userName</p>
                        <p>2019-06-01</p>
                    </div>
                </div>
                <div class="Tmain">
                  dynamicContent文案                 
                  <!-- <img class="image" src="../../assets/1.jpg" alt=""> -->
                    <!-- <img class="image" src="../../assets/1.jpg" alt=""> -->
                </div>
                <div class="Tfooter">
                    <p class="action">
                        <span>点赞</span>
                        <span>评论1</span>
                    </p>
                </div>
            </li>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
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
     })
 },
 created(){
     this.getTimeline();
 }
}

</script>
<style lang='scss' scoped>
    .iptdiv{
        height: 40px;
        line-height: 10px;
        text-align: center;
        input{
            width: 87%;
            background: #eee;
            border:0;
            height: 30px;
            border-radius: 50px;
            text-align: center;
            outline: none;
        }
    }
.center{
    margin: .2rem .3rem;
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