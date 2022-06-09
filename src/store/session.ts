import { defineStore } from 'pinia';

export default defineStore('session', {
    state() {
        return {
            token: '',
            username: '',
        };
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'vt_session',
                storage: localStorage,
            },
        ],
    },
});
