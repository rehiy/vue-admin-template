<template>
    <section class="main">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <el-icon>
                        <Promotion />
                    </el-icon>
                    {{ $t('i18n.breadcrumb') }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <span>{{ $t('i18n.tips') }}</span>
            <el-button type="primary" @click="$i18n.locale = $i18n.locale === 'zh-cn' ? 'en' : 'zh-cn'">{{ $t('i18n.btn') }} </el-button>
            <div class="list">
                <h2>{{ $t('i18n.title1') }}</h2>
                <p>{{ $t('i18n.p1') }}</p>
                <p>{{ $t('i18n.p2') }}</p>
                <p>{{ $t('i18n.p3') }}</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.list {
    padding: 30px 0;
}

.list p {
    margin-bottom: 20px;
}
</style>
