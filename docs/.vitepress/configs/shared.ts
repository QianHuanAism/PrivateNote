import { defineConfig } from 'vitepress'

export const shared = defineConfig({
    title: "QianHuan Private Note",
    description: "A private note",
    base: '/PrivateNote/',
    cleanUrls: false,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: 'Private Note',
        logo: '/assets/siteTitle.ico',
        i18nRouting: true,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/QianHuanAism/PrivateNote' }
        ]
    },
    srcExclude: ['**/README.md']
})