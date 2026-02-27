import { defineConfig } from 'vitepress'

export const shared = defineConfig({
    title: "QianHuan Private Note",
    description: "A private note",
    base: '/PrivateNote/',
    cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: 'Private Note',
        logo: './assets/siteTitle.ico',
        search: { provider: 'local' },
        i18nRouting: true,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/QianHuanAism/PrivateNote' },
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    },
    srcExclude: ['**/README.md']
})