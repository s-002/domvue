<!-- 关注页 -->
<template>
    <div class="div">
        <!-- 数据渲染 -->
        <ul v-for="(item,index) in list" :key="index" @click="detailbtn(item)">
            <li>
                <h5>{{item.name}}</h5>
                <p>{{item.titel}}</p>
                <span>{{item.num}}赞同</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
        list:[
            {
                name:'怎么看待结汇后父母一起居住？',
                titel:'匿名用户：阿尼尔福爱尔阿牛二百奥诶哦哦我or诶UC沃恩外纯牛奶澳网呢戴维南',
                num:335,
                id:0,
                num1:0,
            }, {
                name:'怎么看待结汇后父母一起居住？',
                titel:'nuwed：阿尼尔福爱尔阿牛二百奥诶哦哦我or诶UC沃恩外纯牛奶澳网呢戴维南',
                num:35,
                id:1,
                num1:0,
            }, {
                name:'怎么看待结汇后父母一起居住？',
                titel:'chaohcao：阿尼尔福爱尔阿牛二百奥诶哦哦我or诶UC沃恩外纯牛奶澳网呢戴维南',
                num:535,
                id:2,
                num1:0,
            }, {
                name:'怎么看待结汇后父母一起居住？',
                titel:'张雪：阿尼尔福爱尔阿牛二百奥诶哦哦我or诶UC沃恩外纯牛奶澳网呢戴维南',
                num:3325,
                id:3,
                num1:0,
            }, {
                name:'怎么看待结汇后父母一起居住？',
                titel:'lining：阿尼尔福爱尔阿牛二百奥诶哦哦我or诶UC沃恩外纯牛奶澳网呢戴维南',
                num:3325,
                id:4,
                num1:0,
            }
        ]
    };
  },
  methods: {
      //点击跳转到详情页
      detailbtn(item){
        console.log(this)
        this.$router.push({
            path:`/detail/${item.id}`,
            query:{
                list:item
            }
        })
        // window.location.pathname=`/detail/${item.id}`
        // window.localStorage.getItem('12',item)
      }
  }
}

</script>
<style lang='scss' scoped>
.div{
    width: 100%;
    height: 100%;
    background: #eee;
}
    ul{
        height: 130px;
        line-height: 30px;
        background: #fff;
        margin:8px 0;
        list-style: none;
        span{
            color: #ccc;
        }
    }
</style>