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
                <el-breadcrumb-item>图片上传</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                Element UI 自带上传组件，支持拖拽。项目地址：
                <a href="http://element.eleme.io/#/zh-CN/component/upload" target="_blank">Element UI Upload</a>
            </div>
            <el-upload class="upload-demo" drag action="http://jsonplaceholder.typicode.com/api/posts/" multiple>
                <el-icon>
                    <Upload />
                </el-icon>
                <div class="el-upload__text">
                    将文件拖到此处，或
                    <em>点击上传</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
                </template>
            </el-upload>
        </div>
    </div>
</template>

<script lang="ts" setup></script>
