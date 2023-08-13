<template>
  <div class="interviewComponents">
<!--    使用keep-alive 一级路由匹配的组件都会被缓存   -->
    <keep-alive :include="['ArticlePage']">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>


<script>
export default {
  name: "interviewComponents",
}
</script>

<style lang="less" scoped>
.interviewComponents {
  width: 500px;
  height: 600px;
  margin: 300px auto 20px;
  border-radius: 10px;
  border: red solid 3px;

}
</style>