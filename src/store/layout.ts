import { defineStore } from 'pinia';

const layoutStore = defineStore('layout', {
    state() {
        return {
            collapse: false,
            tabsList: [],
        };
    },
    actions: {
        // 侧边栏折叠
        setCollapse(data: boolean) {
            this.collapse = data;
        },
        // 多窗口操作
        clearTabs() {
            this.tabsList = [];
        },
        openTabsItem(data) {
            this.tabsList.push(data);
        },
        closeTabsItem(data) {
            this.tabsList.splice(data.index, 1);
        },
        closeTabsOther(data) {
            this.tabsList = data;
        },
    },
});

export default layoutStore;

export type LayoutStore = typeof layoutStore;
