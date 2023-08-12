import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "@/views/NotFound.vue";

import Find from "@/views/music/Find.vue";
import My from "@/views/music/My.vue";
import Friend from "@/views/music/Friend.vue";
import Home from "@/views/music/Home.vue";
import Search from "@/views/music/Search.vue";



Vue.use(VueRouter) // 启用VueRouter

const musicRouter = new VueRouter({
    mode: "history",  // 模式设置  （hash模式：有‘#’）
    routes: [    // 规则
        { path: '/', redirect: '/home' },

        { path: '/find', component: Find },
        { path: '/my', component: My },
        { path: '/friend', component: Friend },
        { path: '/home', component: Home },
        { name: 'search', path: '/search/:words?', component: Search },

        { path: '*', component: NotFound },
    ],
    linkActiveClass: 'active', // 模糊匹配类名
    linkExactActiveClass: 'exact-active', // 精确匹配类名
})


export default musicRouter