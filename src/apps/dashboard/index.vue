<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height: 252px">
                    <div class="user-info">
                        <img src="@/assets/img/avatar.jpg" class="user-avator" />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{ username }}</div>
                            <div>{{ role }}</div>
                        </div>
                    </div>
                    <div class="user-info-list">上次登录时间： <span>2019-11-01</span></div>
                    <div class="user-info-list">上次登录地点： <span>上清</span></div>
                </el-card>
                <el-card shadow="hover" style="height: 252px">
                    <template #header>
                        <div class="card-header">
                            <span>语言详情</span>
                        </div>
                    </template>
                    Vue
                    <el-progress :percentage="71.3" color="#42b983"></el-progress>
                    JavaScript
                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
                    CSS
                    <el-progress :percentage="13.7"></el-progress>
                    HTML
                    <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-1">
                                <el-icon class="grid-con-icon">
                                    <UserFilled />
                                </el-icon>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <el-icon class="grid-con-icon">
                                    <Message />
                                </el-icon>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-3">
                                <el-icon class="grid-con-icon">
                                    <Goods />
                                </el-icon>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height: 403px">
                    <template #header>
                        <div class="card-header">
                            <span>待办事项</span>
                            <el-button style="float: right; padding: 3px 10px 0" link>添加</el-button>
                        </div>
                    </template>
                    <el-table :show-header="false" :data="todoList" style="width: 100%">
                        <el-table-column width="40">
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template #default="scope">
                                <div class="todo-item" :class="{ 'todo-item-del': scope.row.status }">
                                    {{ scope.row.title }}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column width="40">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </el-table-column>
                        <el-table-column width="40">
                            <el-icon>
                                <Delete />
                            </el-icon>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <v-chart :option="chart1" style="height: 400px" />
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <v-chart :option="chart2" style="height: 400px" />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

import Api from '@/api/index';

const username = localStorage.getItem('vt_username');
const role = username === 'admin' ? '超级管理员' : '普通用户';

const todoList = reactive([]);
Api.local.getTodolist().then(data => {
    todoList.push(...data);
});

const chart1 = reactive({});
Api.local.getChart3().then(data => {
    Object.assign(chart1, data);
});

const chart2 = reactive({});
Api.local.getChart4().then(data => {
    Object.assign(chart2, data);
});
</script>

<style lang="scss" scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}
</style>
