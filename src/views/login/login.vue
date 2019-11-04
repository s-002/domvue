<!--  -->
<template>
    <div>
        <div class="toplogin">
            <h3>登录</h3>
        </div>
        <div class="div">
            <input type="text" name="" placeholder="用户名" id="" v-model="userName">
            <p class="p">
               <input  type="password" name="" id="" placeholder="登录密码" class='ipt' v-model="userPwd">
               <span class="spans" @click="showbtn()">显示</span>
            </p>
            
            <button class="loginbtn" @click="login">登录</button>
        </div>
        <p>
            <router-link class="linkrout" to='/register' tag="span">没有账号,快速注册</router-link>
        </p>
    </div>
</template>

<script>
import {login} from '../../server/index'
export default {
  data () {
    return {
        isShow:false,
        userName:'',
        userPwd:''
    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
      async login(){
          let {userName,userPwd}=this
          let result=await login({userName,userPwd})
          console.log('result...',result)
          if(result&&result.data.code===1){
              //登录成功，执行后续跳转逻辑
          }
          alert(result.data.msg)
      },
      showbtn(){
        this.isShow=!this.isShow
        if(this.isShow){
            document.querySelector('.ipt').type='text'
            document.querySelector('.spans').innerHTML='隐藏'
        }
        else{
            document.querySelector('.ipt').type='password'
            document.querySelector('.spans').innerHTML='显示'
        }
      }
  }
}

</script>
<style lang="scss">
    .p{
        position: relative;
    }
    .spans{
        font-size: 10px;
        position: absolute;
        top: 43px;
        right: 20px;
    }
    .toplogin{
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
       }
    }
    .linkrout{
        font-size: 17px;
    }
    .loginbtn{
        width: 90%;
        height: 35px;
        line-height: 35px;
        background:#f76968;
        border: 0;
        color: #fff;
    }
</style>