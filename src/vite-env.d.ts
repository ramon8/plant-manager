/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_OPEN_AI_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

