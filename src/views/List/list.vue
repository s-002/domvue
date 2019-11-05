<template>
  <div class="box">
        <div class="content">
            <router-view/>
        </div>
      <!-- 二级路由 -->
      <div class="route-nav">
          <router-link to='/list/home' tag="p">首页</router-link>
          <router-link to='/list/about' tag="p">想法</router-link>
          <router-link to='/list/scolch' tag="p">大学</router-link>
          <router-link to='/list/masg' tag="p">消息</router-link>
          <router-link to='/list/my' tag="p">我的</router-link>
      </div>
       
  </div>
</template>

<script>

export default {
  component:{

  }
}
</script>
<style lang="scss">

.box{
      width: 100%;
      height: 100%;
  }
  .content{
     width: 100%;
      height: 620px;
      overflow: auto;
  }
  .route-nav{
      width: 100%;
      height: 45px;
      line-height: 45px;
      display: flex;
      justify-content: space-around;
  }

.router-link-active{
  color: blue;
}
</style>
