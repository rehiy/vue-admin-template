import { createApp } from 'vue'

import App from '@/App.vue'

import store from '@/helper/store'
import router from '@/helper/router'

import useElement from '@/plugin/element'
import useLocales from '@/plugin/i18n/index'

const app = createApp(App)

useLocales(useElement(app))

app.use(store).use(router).mount('#app')
