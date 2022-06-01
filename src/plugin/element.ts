import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default (app) => {

  for (const [key, component] of Object.entries(Icons)) {
    app.component(key, component)
  }

  app.use(ElementPlus, { locale: zhCn })

  return app

}
