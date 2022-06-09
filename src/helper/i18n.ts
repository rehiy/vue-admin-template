/**
 * 国际化支持
 */

import { createI18n } from 'vue-i18n/index';

import en from '@/helper/language/en';
import zhCn from '@/helper/language/zh-cn';

export default (app: any) => {
    const i18n = createI18n({
        locale: 'zh-cn',
        fallbackLocale: 'en',
        messages: {
            'zh-cn': zhCn,
            en,
        },
    });
    app.use(i18n);
};
