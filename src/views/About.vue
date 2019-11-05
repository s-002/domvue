<!--  -->
<template>
    <div>
      <h3>购物车</h3>
      <ul v-for="(item,index) in newlist" :key="index">
            <li>
                <h5>{{item.name}}</h5>
                <p>{{item.titel}}</p>
                <button @click="remove(index)">-</button>
                <span>{{item.num1}}</span>
                <button @click="add(index)">+</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  computed: {
    newlist(){
      return this.$store.state.pushlist
    }
  },
  methods:{
    remove(index){
      this.$store.commit('remove',index)
    },
    add(index){
      this.$store.commit('add',index)
    }
  }
}

</script>
<style lang='scss' scoped>
  button{
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border:0;
    background: pink;
  }
</style>
