import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import layout from '@/apps/layout/index.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'home',
        component: layout,
        children: [
            {
                path: '/charts/sample',
                name: 'charts-sample',
                meta: {
                    title: '基础图表',
                    login: true,
                },
                component: () => import('@/apps/charts/sample.vue'),
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    login: true,
                },
                component: () => import('@/apps/dashboard/index.vue'),
            },
            {
                path: '/editor/wangeditor',
                name: 'wangeditor',
                meta: {
                    title: '富文本编辑器',
                    login: true,
                },
                component: () => import('@/apps/editor/wangeditor.vue'),
            },
            {
                path: '/error/403',
                name: 'error-403',
                meta: {
                    title: '访问被禁止',
                    login: true,
                },
                component: () => import('@/apps/error/403.vue'),
            },
            {
                path: '/error/404',
                name: 'error-404',
                meta: {
                    title: '找不到页面',
                    login: true,
                },
                component: () => import('@/apps/error/404.vue'),
            },
            {
                path: '/form/sample',
                name: 'form-sample',
                meta: {
                    title: '基础表单',
                    login: true,
                },
                component: () => import('@/apps/form/sample.vue'),
            },
            {
                path: '/form/upload',
                name: 'form-upload',
                meta: {
                    title: '上传表单',
                    login: true,
                },
                component: () => import('@/apps/form/upload.vue'),
            },
            {
                path: '/i18n',
                name: 'i18n',
                meta: {
                    title: '国际化',
                    login: true,
                },
                component: () => import('@/apps/i18n/index.vue'),
            },
            {
                path: '/table/sample',
                name: 'table-sample',
                meta: {
                    title: '基础表格',
                    login: true,
                },
                component: () => import('@/apps/table/sample.vue'),
            },
            {
                path: '/tabpane/sample',
                name: 'tabpane-sample',
                meta: {
                    title: '选项卡',
                    login: true,
                },
                component: () => import('@/apps/tabpane/sample.vue'),
            },
            {
                path: '/user/info',
                name: 'user-info',
                meta: {
                    title: '个人中心',
                    login: true,
                },
                component: () => import('@/apps/user/info.vue'),
            },
            {
                path: '/user/super',
                name: 'user-super',
                meta: {
                    title: '超管访问',
                    login: true,
                    super: true,
                },
                component: () => import('@/apps/user/super.vue'),
            },
        ],
    },
    {
        path: '/user/login',
        name: 'user-login',
        meta: {
            title: '登录',
        },
        component: () => import('@/apps/user/login.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - Vue Admin`;
    const username = localStorage.getItem('vt_username');

    // 需要登录才能访问
    if (to.meta.login && !username) {
        next('/user/login');
        return;
    }

    // 需要超管才能访问
    if (to.meta.login && username !== 'admin') {
        next('/error/403');
        return;
    }

    // 普通访问
    next();
});

export default router;
