import { createApp } from 'vue'

import App from '@/App.vue'

import store from '@/helper/store'
import router from '@/helper/router'

import useElement from '@/plugin/element'
import useI18n from '@/plugin/i18n'

const app = createApp(App)

useElement(app), useI18n(app)

app.use(store).use(router).mount('#app')
