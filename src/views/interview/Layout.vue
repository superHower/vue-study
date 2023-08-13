<template>
  <div class="h5-wrapper">
    <div class="content">
        <router-view></router-view>
    </div>
    <nav class="tab-bar">
      <router-link to="/article">面经</router-link>
      <router-link to="/collect">收藏</router-link>
      <router-link to="/like">喜欢</router-link>
      <router-link to="/user">我的</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',


  created() {
    console.log('created 组件被加载')
  },
  mounted () {
    console.log('mounted 组件dom被渲染')
  },
  destroyed() {
    console.log('destroyed 组件被销毁')
  },
  activated() {
    console.log('activated 组件激活， 看到页面（keep-alive缓存才有）')
  },
  deactivated() {
    console.log('deactivated 组件失活， 离开页面（keep-alive缓存才有）')
  },
}
</script>

<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
    height: 550px;
    overflow: auto;
  }
  .tab-bar {
    position: absolute;
    top: 6984px;

    width: 496px;
    height: 50px;
    margin: 0 auto;
    border: deepskyblue solid 3px;
    border-radius: 10px;

    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
    }
    a.active {
      background-color: orange;
    }
  }
}
</style>