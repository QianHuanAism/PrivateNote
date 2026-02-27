import { defineConfig } from 'vitepress'
import { shared } from './configs/shared'
import { zh } from './configs/zh'
import { en } from './configs/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: {
      label: '简体中文',
      ...zh,
      link: '/zh/'
    },
    en: {
      label: 'English',
      ...en,
      link: '/en/'
    }
  }
})
