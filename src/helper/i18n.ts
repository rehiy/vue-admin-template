import { App } from 'vue';
import { createI18n } from 'vue-i18n/index';

import en from '@/helper/language/en';
import zhCn from '@/helper/language/zh-cn';

export default (app: App<Element>) => {
    const i18n = createI18n({
        locale: 'zh-cn',
        fallbackLocale: 'en',
        messages: {
            'zh-cn': zhCn,
            en,
        },
    });

    return app.use(i18n);
};
