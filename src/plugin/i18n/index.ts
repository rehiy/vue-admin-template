import { createI18n } from 'vue-i18n/index'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

import message from './message'

export default (app) => {

    const i18n = createI18n({
        locale: zhCn.name,
        fallbackLocale: en.name,
        message,
    })

    return app.use(i18n)

}
