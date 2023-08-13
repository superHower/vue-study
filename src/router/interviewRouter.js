import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "@/views/NotFound.vue";

import Layout from "@/views/interview/Layout.vue";
import ArticleDetail from "@/views/interview/ArticleDetail.vue";
import Article from "@/views/interview/Article.vue";
import Collect from "@/views/interview/Collect.vue";
import Like from "@/views/interview/Like.vue";
import User from "@/views/interview/User.vue";

Vue.use(VueRouter) // 启用VueRouter
const interviewRouter = new VueRouter({
    mode: "history",  // 模式设置  （hash模式：有‘#’）
    routes: [    // 规则
        { path: '/', redirect: '/layout' },
        { path: '/layout', component: Layout, redirect: '/Article',
            children: [
                { path: '/Article', component: Article },
                { path: '/Collect', component: Collect },
                { path: '/Like', component: Like },
                { path: '/User', component: User },
            ]
        },
        { path: '/ArticleDetail/:id', component: ArticleDetail },

        { path: '*', component: NotFound },
    ],
    linkActiveClass: 'active', // 模糊匹配类名
    linkExactActiveClass: 'exact-active', // 精确匹配类名
})


export default interviewRouter