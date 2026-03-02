import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'

export const math = defineConfig({
    markdown: {
        math: true,
    }
})