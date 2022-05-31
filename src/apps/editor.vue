<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <el-icon>
            <Calendar />
          </el-icon> 表单
        </el-breadcrumb-item>
        <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="plugins-tips">
        wangEditor：轻量级 web 富文本编辑器，配置方便，使用简单。项目地址：
        <a href="https://www.wangeditor.com/doc/" target="_blank">wangEditor</a>
      </div>
      <div class="mgb20" ref="editor"></div>
      <el-button type="primary" @click="syncHTML">提交</el-button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import WangEditor from 'wangeditor'

export default {
  name: 'editor',
  setup() {
    const editor = ref(null)
    const content = reactive({
      html: '',
      text: '',
    })
    let instance
    onMounted(() => {
      instance = new WangEditor(editor.value)
      instance.config.zIndex = 1
      instance.create()
    })
    onBeforeUnmount(() => {
      instance.destroy()
      instance = null
    })
    const syncHTML = () => {
      content.html = instance.txt.html()
      console.log(content.html)
    }
    return {
      syncHTML,
      editor,
      content,
    }
  },
}
</script>

<style scoped>
.mgb20 {
  margin-bottom: 20px;
}

.ql-container {
  min-height: 400px;
}

.ql-snow .ql-tooltip {
  transform: translateX(117.5px) translateY(10px) !important;
}

.editor-btn {
  margin-top: 20px;
}

.v-note-wrapper .v-note-panel {
  min-height: 500px;
}
</style>