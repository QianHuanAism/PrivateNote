import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
    lang: "zh-CN",

    themeConfig:
    {
        nav: nav("/zh/"),
        sidebar: {
            '/zh/csharp/': { items: sidebarEnvironment(), base: '/zh/csharp/' },
            '/zh/vitepress/' : { items: sidebarVitePress(), base: '/zh/vitepress/'}
        }
    }
})

function nav(base: string): DefaultTheme.NavItem[] {
    return [
        { text: "主页", link: base },
        {
            text: '导航', 
            activeMatch: base,
            items: [
                {
                    text: 'VitePress2.0 文档',
                    link: base + 'vitepress/快速开始'
                },
                {
                    text: 'C# 学习笔记',
                    link: base + 'csharp/简介'
                }
            ]
        }
    ]
}

function sidebarEnvironment(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'C#',
            collapsed: false,
            items: [
                { text: 'C# 简介', link: '/简介/' },
                { text: '开发环境搭建', link: '/开发环境搭建/' },
                { text: '项目创建', link: '/项目创建/' },
                { text: '项目结构介绍', link: '/项目结构介绍/' }
            ]
        },
        {
            text: 'C# 基础',
            collapsed: false,
            items: [
                { text: '变量', link: '/csharpBase/变量/' },
                { text: '类型系统', link: '/csharpBase/类型系统/' },
                { text: '常量', link: '/csharpBase/常量/' }
            ]
        },
        {
            text: 'C# 高级',
            collapsed: false,
            items: [
                
            ]
        }
    ]
}

function sidebarVitePress(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'VitePress2.0文档',
            collapsed: false,
            items: [
                { text: '快速开始', link: '/快速开始/'}
            ]
        },
    ]
}

