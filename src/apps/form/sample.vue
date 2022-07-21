<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <el-icon>
                        <Calendar />
                    </el-icon>
                    表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="formRef" :model="formModel" :rules="formRules" label-width="80px">
                    <el-form-item label="表单名称" prop="name">
                        <el-input v-model="formModel.name" />
                    </el-form-item>
                    <el-form-item label="选择器" prop="region">
                        <el-select v-model="formModel.region" placeholder="请选择">
                            <el-option key="bbk" label="步步高" value="bbk" />
                            <el-option key="xtc" label="小天才" value="xtc" />
                            <el-option key="imoo" label="imoo" value="imoo" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="日期时间">
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker v-model="formModel.date1" type="date" placeholder="选择日期" style="width: 100%" />
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">
                            -
                        </el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-time-picker v-model="formModel.date2" placeholder="选择时间" style="width: 100%" />
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="城市级联" prop="options">
                        <el-cascader v-model="formModel.options" :options="options" />
                    </el-form-item>
                    <el-form-item label="选择开关" prop="delivery">
                        <el-switch v-model="formModel.delivery" />
                    </el-form-item>
                    <el-form-item label="多选框" prop="type">
                        <el-checkbox-group v-model="formModel.type">
                            <el-checkbox label="步步高" name="type" />
                            <el-checkbox label="小天才" name="type" />
                            <el-checkbox label="imoo" name="type" />
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="单选框" prop="resource">
                        <el-radio-group v-model="formModel.resource">
                            <el-radio label="步步高" />
                            <el-radio label="小天才" />
                            <el-radio label="imoo" />
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="文本框" prop="desc">
                        <el-input v-model="formModel.desc" type="textarea" rows="5" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="formSubmit(formRef)">
                            表单提交
                        </el-button>
                        <el-button @click="formReset(formRef)">
                            重置表单
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { ElMessage, FormInstance, FormRules } from "element-plus"

const options = [
    {
        value: 'guangdong',
        label: '广东省',
        children: [
            {
                value: 'guangzhou',
                label: '广州市',
                children: [
                    {
                        value: 'tianhe',
                        label: '天河区',
                    },
                    {
                        value: 'haizhu',
                        label: '海珠区',
                    },
                ],
            },
            {
                value: 'dongguan',
                label: '东莞市',
                children: [
                    {
                        value: 'changan',
                        label: '长安镇',
                    },
                    {
                        value: 'humen',
                        label: '虎门镇',
                    },
                ],
            },
        ],
    },
    {
        value: 'hunan',
        label: '湖南省',
        children: [
            {
                value: 'changsha',
                label: '长沙市',
                children: [
                    {
                        value: 'yuelu',
                        label: '岳麓区',
                    },
                ],
            },
        ],
    },
];

const formRef = ref<FormInstance>();

const formModel = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: true,
    type: ['步步高'],
    resource: '小天才',
    desc: '',
    options: [],
});

const formRules: FormRules = {
    name: [{ required: true, message: '请输入表单名称', trigger: 'blur' }],
};

// 提交
const formSubmit = (form: FormInstance | undefined) => {
    form && form.validate(valid => {
        if (valid) {
            console.log(formModel);
            ElMessage.success('提交成功！');
        } else {
            return false;
        }
    });
};

// 重置
const formReset = (form: FormInstance | undefined) => {
    form && form.resetFields();
};
</script>

<style lang="scss" scoped>
.form-box {
    width: 600px;

    .line {
        text-align: center;
    }
}

.el-time-panel__content::after,
.el-time-panel__content::before {
    margin-top: -7px;
}

.el-time-spinner__wrapper .el-scrollbar__wrap:not(.el-scrollbar__wrap--hidden-default) {
    padding-bottom: 0;
}
</style>
