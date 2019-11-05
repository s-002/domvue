<!--详情页 -->
<template>
    <div>
      <span @click="backbtn()">返回</span>
      <span>  详情页 </span>
       <ul>
            <li>
                <h5>{{list.name}}</h5>
                <p>{{list.titel}}</p>
                <span @click="addnum(list.num)">{{list.num}}赞同</span>
                <button @click="addlist(list)">+</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      list:{}
    }
  },
  created(){
    // console.log(this.$route.query)
    this.getdata()
  },
  methods: {
   backbtn(){//点击返回
     window.history.back()
   },
    getdata(){
      this.list=this.$route.query.list
      // console.log(this.list)
    },
    addnum(num){
    this.list.num++
      // console.log(num)
    },
    addlist(list){
      this.$store.commit('addlist',list)
    }
  }
}

</script>
<style lang='scss' scoped>
  button{
    width: 20px;
    height: 20px;
   border:0;
   background: pink;
  }
</style>