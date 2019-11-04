<!--  -->
<template>
    <div>
        <div class="topregis">
            <h3>注册</h3>
        </div>
        <div class="div">
            <input type="text" name="" placeholder="用户名" id="">
            <input type="text" name="" id="" placeholder="密码">
            <button class="regisbtn">注册</button>
        </div>
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
       }
    }
    .regisbtn{
        width: 90%;
        height: 35px;
        line-height: 35px;
        background:#f76968;
        border: 0;
        color: #fff;
    }
</style>