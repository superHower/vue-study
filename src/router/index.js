import Vue from "vue";
import VueRouter from "vue-router";

import Find from "@/views/Find.vue";
import My from "@/views/My.vue";
import Friend from "@/views/Friend.vue";
import Home from "@/views/Home.vue";
import Search from "@/views/Search.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter) // 启用VueRouter
const router = new VueRouter({
    mode: "history",  // 模式设置  （hash模式：有‘#’）
    routes: [    // 规则
        { path: '/', redirect: '/home' },
        {path: '/find', component: Find },
        {path: '/my', component: My },
        {path: '/friend', component: Friend },
        { path: '/home', component: Home },
        { path: '/search/:words?', component: Search },
        { path: '*', component: NotFound },
    ],
    linkActiveClass: 'active', // 模糊匹配类名
    linkExactActiveClass: 'exact-active', // 精确匹配类名
})


export default router