<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <el-icon>
                        <PieChart />
                    </el-icon>
                    图表组件
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="chart-box">
                <v-chart :option="chart1" style="height: 400px" />
            </div>
            <div class="chart-box">
                <v-chart :option="chart2" style="height: 400px" />
            </div>
            <div class="chart-box">
                <v-chart :option="chart3" style="height: 400px" />
            </div>
            <div class="chart-box">
                <v-chart :option="chart4" style="height: 400px" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

import Api from '@/api/index';

const chart1 = reactive({});
Api.local.getChart1().then(data => {
    Object.assign(chart1, data);
});

const chart2 = reactive({});
Api.local.getChart2().then(data => {
    Object.assign(chart2, data);
});

const chart3 = reactive({});
Api.local.getChart3().then(data => {
    Object.assign(chart3, data);
});

const chart4 = reactive({});
Api.local.getChart4().then(data => {
    Object.assign(chart4, data);
});
</script>

<style lang="scss" scoped>
.chart-box {
    display: inline-block;
    width: 50%;
    padding: 10px;
}
</style>
