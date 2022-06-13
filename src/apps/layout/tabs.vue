<template>
    <div v-if="layout.tabsList.length > 0" class="tabs">
        <el-button v-for="(item, index) in layout.tabsList" :key="index" :type="isActive(item.path) ? 'primary' : ''">
            <router-link :to="item.path">{{ item.title }}</router-link>
            <el-icon class="el-icon--right" @click="closeTabs(index)">
                <Close />
            </el-icon>
        </el-button>
        <span style="flex: auto"></span>
        <el-dropdown @command="handleTabs">
            <el-button type="primary">
                标签选项
                <el-icon class="el-icon--right">
                    <Arrow-down />
                </el-icon>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu size="small">
                    <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                    <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';

import layoutStore from '@/store/layout';

const route = useRoute();
const router = useRouter();
const layout = layoutStore();

const isActive = path => {
    return path === route.fullPath;
};

// 更新标签
const updateTabs = route => {
    const isExist = layout.tabsList.some(item => {
        return item.path === route.fullPath;
    });
    if (!isExist) {
        if (layout.tabsList.length >= 8) {
            layout.closeTabsItem({ index: 0 });
        }
        layout.openTabsItem({
            name: route.name,
            title: route.meta.title,
            path: route.fullPath,
        });
    }
};

updateTabs(route);
onBeforeRouteUpdate(to => updateTabs(to));

// 关闭单个标签
const closeTabs = index => {
    const last = layout.tabsList[index];
    layout.closeTabsItem({ index }); // 不能换位置
    const item = layout.tabsList[index] ? layout.tabsList[index] : layout.tabsList[index - 1];
    if (item) {
        last.path === route.fullPath && router.push(item.path);
    } else {
        router.push('/');
    }
};

// 关闭其他标签
const closeOther = () => {
    const cur = layout.tabsList.filter(item => {
        return item.path === route.fullPath;
    });
    layout.closeTabsOther(cur);
};

// 关闭全部标签
const closeAll = () => {
    layout.clearTabs();
    router.push('/');
};

// 处理下拉菜单事件
const handleTabs = command => {
    command === 'other' ? closeOther() : closeAll();
};
</script>

<style lang="scss" scoped>
.tabs {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 10px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 5px 10px #ddd;
}
</style>
