import { createApp } from 'vue';

import App from '@/app.vue';
import '@/assets/style.scss';

import setupEcharts from '@/helper/echarts';
import setupElement from '@/helper/element';
import setupI18n from '@/helper/i18n';

import setupStore from '@/store/index';
import setupRouter from '@/router/index';

const app = createApp(App);

setupEcharts(app);
setupElement(app);
setupI18n(app);

setupStore(app);
setupRouter(app);

app.mount('#app');
