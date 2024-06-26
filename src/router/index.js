import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        name: "login",
        component: () => import("../pages/login.vue"),
    },
    {
        path: "/index",
        name: "index",
        component: () => import("../pages/index.vue"),
        redirect: "/index/bookInfo",
        children: [
            {
                path: "bookInfo",
                name: "bookInfo",
                component: () => import("../components/sidebar/bookInfo.vue"),
            },
            {
                path: "borrow",
                name: "borrowInfo",
                component: () => import("../components/sidebar/borrow.vue"),
            },
            {
                path: "userInfo",
                name: "userInfo",
                component: () => import("../components/sidebar/userInfo.vue"),
            },
            {
                path: "borrowReq",
                name: "borrowReq",
                component: () => import("../components/sidebar/borrowReq.vue"),
            }
        ]
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router