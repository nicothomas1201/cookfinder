/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_BASE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
