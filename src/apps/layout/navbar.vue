<template>
    <div class="header">
        <div class="collapse-btn" @click="collapseChange">
            <el-icon :size="30">
                <Fold v-if="!layout.collapse" />
                <Expand v-else />
            </el-icon>
        </div>
        <div class="logo">Vue Admin</div>
        <!-- 消息中心 -->
        <div class="btn-bell">
            <el-tooltip effect="dark" :content="message ? `有 ${message} 条未读消息` : `消息中心`" placement="bottom">
                <router-link to="/tabpane/sample">
                    <el-icon :size="30">
                        <Bell />
                    </el-icon>
                </router-link>
            </el-tooltip>
            <span v-if="message" class="btn-bell-badge"></span>
        </div>
        <div class="header-user-con">
            <!-- 用户头像 -->
            <div class="user-avator">
                <img src="@/assets/img/avatar.jpg" />
            </div>
            <!-- 用户名下拉菜单 -->
            <el-dropdown class="user-name" trigger="click" @command="userDropdown">
                <span class="el-dropdown-link">
                    &nbsp;{{ username }}&nbsp;
                    <el-icon>
                        <CaretBottom />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <a href="https://github.com/rehiy/vue-admin-template">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a>
                        <el-dropdown-item command="user">个人中心</el-dropdown-item>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import layoutStore from '@/store/layout';
import sessionStore from '@/store/session';

const router = useRouter();
const layout = layoutStore();
const session = sessionStore();

const username = session.username;
const message = 2;

// 侧边栏折叠
const collapseChange = () => {
    layout.setCollapse(!layout.collapse);
};

// 小屏自动折叠
onMounted(() => {
    if (document.body.clientWidth < 1000) {
        collapseChange();
    }
});

// 用户名下拉菜单选择事件
const userDropdown = command => {
    if (command == 'loginout') {
        session.username = '';
        router.push('/user/login');
    } else if (command == 'user') {
        router.push('/user/info');
    }
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 70px;
    padding: 0 20px;
    font-size: 22px;
    background-color: #242f42;
    color: #fff;

    .collapse-btn {
        height: 28px;
        background: rgb(40, 52, 70);
        cursor: pointer;
    }

    .logo {
        flex: auto;
        width: 250px;
        padding: 0 20px;
    }
}

.btn-bell {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;

    .btn-bell-badge {
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }

    .el-icon {
        color: #fff;
    }
}

.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;

    .user-name {
        margin-left: 10px;
    }

    .user-avator {
        margin-left: 20px;
    }

    .user-avator img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

.el-dropdown-link {
    display: flex;
    color: #fff;
    cursor: pointer;
}
</style>
