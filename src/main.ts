import { createApp } from 'vue';

import App from '@/app.vue';
import '@/assets/style.scss';

import setupElement from '@/helper/element';
import setupI18n from '@/helper/i18n';

import setupStore from '@/store/index';
import router from '@/router/index';

const app = createApp(App);

setupElement(app);
setupI18n(app);

setupStore(app);

app.use(router);
app.mount('#app');
