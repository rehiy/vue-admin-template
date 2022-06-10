import { defineStore } from 'pinia';

const sessionStore = defineStore('session', {
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

export default sessionStore;

export type SessionStore = typeof sessionStore;
