<!-- 首页 -->
<template>
    <div>
        <div class="deing">
            <div class="iptdiv" >
                <input type="text" name="" id="" placeholder="输入搜索内容"> 
                <span>提问</span>
            </div>
            <!-- 三级路由 -->
            <div class='connav'>
                <router-link to='/list/home/nav1' tag="p">关注</router-link>
                <router-link to='/list/home/nav2' tag="p">推荐</router-link>
                <router-link to='/list/home/nav3' tag="p">热榜</router-link>
            </div>
        </div>
        
        <div>
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
export default {
  data () {
    return {
       
    }
  }
}

</script>
<style lang='scss' scoped>
    .deing{
     position: sticky;
        top: 0;
        left: 0;
        background: #fff;
    }
    .iptdiv{
        width: 100%;
        height: 35px;
        line-height: 35px;
       
        display: flex;
        justify-content: space-around;
        input{
            flex: 8;
            height: 30px;
            background: #eee;
            text-align: center;
            border-radius: 10px;
            border:0;
            margin: 5px;
            
        }
        span{
            flex:2;
            color: blue;
        }
    }
    .connav{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: space-around;
    }
    .router-link-active{
        color: red;
        border-bottom: 1px solid red;
    }
</style>