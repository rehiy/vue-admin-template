import { createRouter, createWebHashHistory } from 'vue-router';

import sessionStore from '@/store/session';

import { routes } from './routes';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - Vue Admin`;

    const username = sessionStore().username;

    // 需要登录才能访问
    if (to.meta.login && !username) {
        next('/user/login');
        return;
    }

    // 需要超管才能访问
    if (to.meta.super && username !== 'admin') {
        next('/error/403');
        return;
    }

    // 普通访问
    next();
});

export default (app: any) => {
    app.use(router);
};
