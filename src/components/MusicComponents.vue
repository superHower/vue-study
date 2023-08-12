<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/home">首页</router-link>
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
      <router-link to="/search">搜索页</router-link>
    </div>
    <div class="top">
<!--      <router-view></router-view>      &lt;!&ndash; 路由出口 → 匹配的组件所展示的位置 &ndash;&gt;-->
    </div>
  </div>


</template>


<script>
export default {
  name: 'MusicComponents',
}
</script>



<style scoped>

.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 1000px;
  text-align: center;
  background-color: #333;
  color: #ccc;
  margin: 0 auto;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a.active {
  background-color: purple;
}

.footer_wrap a:hover {
  background-color: #555;
}
.top {
  width: 1000px;
  height: 500px;
  border: greenyellow solid 3px;
  border-radius: 10px;
  margin: 10px auto 100px;
}



</style>