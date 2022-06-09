<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="(item, index) in items">
                <template v-if="item.subs">
                    <el-sub-menu :key="index" :index="item.index">
                        <template #title>
                            <component :is="item.icon" class="el-icon"></component>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="(subItem, idx) in item.subs">
                            <template v-if="subItem.subs">
                                <el-sub-menu :key="idx" :index="subItem.index">
                                    <template #title>{{ subItem.title }}</template>
                                    <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                        {{ threeItem.title }}
                                    </el-menu-item>
                                </el-sub-menu>
                            </template>
                            <template v-else>
                                <el-menu-item :key="idx" :index="subItem.index">
                                    {{ subItem.title }}
                                </el-menu-item>
                            </template>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :key="index" :index="item.index">
                        <component :is="item.icon" class="el-icon"></component>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import layoutStore from '@/store/layout';

const route = useRoute();
const layout = layoutStore();

const onRoutes = computed(() => route.path);
const collapse = computed(() => layout.collapse);

const items = [
    {
        icon: 'HomeFilled',
        index: '/dashboard',
        title: '系统首页',
    },
    {
        icon: 'CopyDocument',
        index: '/tabpane/sample',
        title: '选项卡',
    },
    {
        icon: 'Histogram',
        index: '/table/sample',
        title: '基础表格',
    },
    {
        icon: 'TrendCharts',
        index: '3',
        title: '表单相关',
        subs: [
            {
                index: '/form/sample',
                title: '基本表单',
            },
            {
                index: '/form/upload',
                title: '文件上传',
            },
            {
                index: '4',
                title: '三级菜单',
                subs: [
                    {
                        index: '/editor/wangeditor',
                        title: '富文本编辑器',
                    },
                ],
            },
        ],
    },
    {
        icon: 'PieChart',
        index: '/charts/sample',
        title: '图表组件',
    },
    {
        icon: 'Promotion',
        index: '/i18n',
        title: '国际化',
    },
    {
        icon: 'Warning',
        index: '7',
        title: '错误处理',
        subs: [
            {
                index: '/error/403',
                title: '403页面',
            },
            {
                index: '/error/404',
                title: '404页面',
            },
            {
                index: '/user/super',
                title: '权限测试',
            },
        ],
    },
];
</script>

<style lang="scss" scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
    width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}

.sidebar > ul {
    height: 100%;
}
</style>
