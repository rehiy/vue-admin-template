/// <reference types="vite/client" />

declare module '*.vue' {
    import { ComponentOptions } from 'vue';
    const componentOptions: ComponentOptions;
    export default componentOptions;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
    readonly VITE_API_BASE: string;
}
