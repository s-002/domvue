<!--  -->
<template>
    <div>
        <div class="topregis">
            <h3>注册</h3>
        </div>
        <div class="div">
            <input type="text" name="" placeholder="用户名" id="" v-model="userName">
            <input type="text" name="" id="" placeholder="密码" v-model="userPwd">
            <button class="regisbtn" @click="register">注册</button>
        </div>
    </div>
</template>

<script>
import { register } from '../../server/index'
export default {
  data () {
    return {
        userName:'',
        userPwd:''
    }
  },
  methods: {
      async register(){
          let {userName,userPwd}=this
          let result=await register({userName,userPwd})
          console.log('result...',result)
          if(result&&result.data.code===1){
              //注册成功，执行后续跳转逻辑
              alert(result.data.msg)
          }
          else{
              window.history.back()
          }
      },
  }
}

</script>
<style lang='scss'>
     .topregis{
        width: 100%;
        height: 40px;
        background: #eee;
        text-align: center;
        line-height: 40px;
        h3{
            font-size: 20px;
        }
    }
     .div{
        text-align: center;
       input{
           width:90%;
           height: 30px;
           background: #eee;
           border: 0;
            font-size: .3rem;
       }
    }
    .regisbtn{
        width: 90%;
        height: 35px;
        line-height: 35px;
        background:#f76968;
        border: 0;
        color: #fff;
         font-size: .3rem;
    }
</style>