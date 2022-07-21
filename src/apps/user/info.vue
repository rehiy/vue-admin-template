<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <template #header>
                        <div class="card-header">
                            <span>基础信息</span>
                        </div>
                    </template>
                    <div class="info">
                        <div class="info-image" @click="showDialog">
                            <img :src="avatarImg">
                            <span class="info-edit">
                                <el-icon>
                                    <Camera />
                                </el-icon>
                            </span>
                        </div>
                        <div class="info-name">
                            {{ username }}
                        </div>
                        <div class="info-desc">
                            不可能！我的代码怎么可能会有bug！
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <template #header>
                        <div class="card-header">
                            <span>账户编辑</span>
                        </div>
                    </template>
                    <el-form label-width="90px">
                        <el-form-item label="用户名：">
                            {{ username }}
                        </el-form-item>
                        <el-form-item label="旧密码：">
                            <el-input v-model="form.old" type="password" />
                        </el-form-item>
                        <el-form-item label="新密码：">
                            <el-input v-model="form.new" type="password" />
                        </el-form-item>
                        <el-form-item label="个人简介：">
                            <el-input v-model="form.desc" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">
                                保存
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
        <el-dialog v-model="dialogVisible" title="裁剪图片" width="600px">
            <div class="plugins-tips">
                vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。项目地址：
                <a href="https://github.com/Agontuk/vue-cropperjs" target="_blank">vue-cropperjs</a>
            </div>
            <vue-cropper
                ref="cropper"
                :src="imgSrc"
                :ready="cropImage"
                :zoom="cropImage"
                :cropmove="cropImage"
                style="width: 100%; height: 400px"
            />
            <template #footer>
                <span class="dialog-footer">
                    <el-button class="crop-demo-btn" type="primary">
                        选择图片
                        <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage">
                    </el-button>
                    <el-button type="primary" @click="saveAvatar">上传并保存</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

import sessionStore from '@/store/session';

import avatar from '@/assets/img/avatar.jpg';

const session = sessionStore();

const username = session.username;

const form = reactive({
    old: '',
    new: '',
    desc: '不可能！我的代码怎么可能会有bug！',
});

const onSubmit = () => {
    console.log('submited');
};

const cropper = ref();
const imgSrc = ref('');
const cropImg = ref('');
const avatarImg = ref(avatar);
const dialogVisible = ref(false);

const showDialog = () => {
    dialogVisible.value = true;
    imgSrc.value = avatarImg.value;
};

const setImage = (e: Event) => {
    const file = e.target.files[0];
    if (!file.type.includes('image/')) {
        return;
    }
    const reader = new FileReader();
    reader.onload = event => {
        dialogVisible.value = true;
        imgSrc.value = '' + event.target.result;
        cropper.value && cropper.value.replace(event.target.result);
    };
    reader.readAsDataURL(file);
};

const cropImage = () => {
    cropImg.value = cropper.value.getCroppedCanvas().toDataURL();
};

const saveAvatar = () => {
    avatarImg.value = cropImg.value;
    dialogVisible.value = false;
};
</script>

<style lang="scss" scoped>
.info {
    text-align: center;
    padding: 35px 0;

    .info-name {
        margin: 15px 0 10px;
        font-size: 24px;
        font-weight: 500;
        color: #262626;
    }

    .info-image {
        position: relative;
        margin: auto;
        width: 100px;
        height: 100px;
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 50px;
        overflow: hidden;

        & img {
            width: 100%;
            height: 100%;
        }

        &:hover .info-edit {
            opacity: 1;
        }
    }

    .info-edit {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.3s ease;

        & i {
            color: #eee;
            font-size: 25px;
        }
    }
}

.crop-demo-btn {
    position: relative;
}

.crop-input {
    position: absolute;
    width: 100px;
    height: 40px;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
}
</style>
