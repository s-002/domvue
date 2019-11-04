<!--  -->
<template>
    <div>
        <div class="toplogin">
            <h3>登录</h3>
        </div>
        <div class="div">
            <input type="text" name="" placeholder="用户名" id="">
            <input type="text" name="" id="" placeholder="登录密码">
            <button class="loginbtn">登录</button>
        </div>
        <p>
            <router-link class="linkrout" to='/register' tag="span">没有账号,快速注册</router-link>
        </p>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang="scss">
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