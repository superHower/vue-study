import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

// import musicRouter from './router/musicRouter';
import interviewRouter from "./router/interviewRouter";



import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式
import BaseGoodsItem from "@/components/Xtx/BaseGoodsItem.vue";



Vue.config.productionTip = false  // vue配置
Vue.use(VueRouter) // 启用VueRouter

Vue.component('BaseGoodsItem', BaseGoodsItem)// 全局组件
Vue.directive('focus', {    // 全局指令
  inserted (el) {    // inserted 指令的元素，被插入到页面中时触发
    el.focus()
  }
})



new Vue({
  render: h => h(App),
  router:interviewRouter
}).$mount('#app')


