import { createRouter, createWebHashHistory } from 'vue-router'

import vHome from '@/apps/home/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/',
    name: 'home',
    component: vHome,
    children: [
      {
        path: '/charts',
        name: 'basecharts',
        meta: {
          title: '图表',
        },
        component: () => import('@/apps/basecharts.vue'),
      },
      {
        path: '/form',
        name: 'baseform',
        meta: {
          title: '表单',
        },
        component: () => import('@/apps/baseform.vue'),
      },
      {
        path: '/table',
        name: 'basetable',
        meta: {
          title: '表格',
        },
        component: () => import('@/apps/basetable.vue'),
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '系统首页',
        },
        component: () => import('@/apps/dashboard.vue'),
      },
      {
        path: '/editor',
        name: 'editor',
        meta: {
          title: '富文本编辑器',
        },
        component: () => import('@/apps/editor.vue'),
      },
      {
        path: '/i18n',
        name: 'i18n',
        meta: {
          title: '国际化',
        },
        component: () => import('@/apps/i18n.vue'),
      },
      {
        path: '/permission',
        name: 'permission',
        meta: {
          title: '权限管理',
          permission: true,
        },
        component: () => import('@/apps/permission.vue'),
      },
      {
        path: '/upload',
        name: 'upload',
        meta: {
          title: '上传插件',
        },
        component: () => import('@/apps/upload.vue'),
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          title: '个人中心',
        },
        component: () => import('@/apps/user.vue'),
      },
      {
        path: '/tabs',
        name: 'tabs',
        meta: {
          title: '选项卡',
        },
        component: () => import('@/apps/tabs.vue'),
      },
      {
        path: '/403',
        name: '403',
        meta: {
          title: '没有权限',
        },
        component: () => import('@/apps/error/403.vue'),
      },
      {
        path: '/404',
        name: '404',
        meta: {
          title: '找不到页面',
        },
        component: () => import('@/apps/error/404.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/apps/login.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Vue Admin`
  const username = localStorage.getItem('vt_username')
  if (!username && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    username === 'admin' ? next() : next('/403')
  } else {
    next()
  }
})

export default router
