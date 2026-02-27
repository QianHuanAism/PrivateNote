import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
    lang: "en-US",

    themeConfig:
    {
        nav: nav("/en/"),
        sidebar: {
            
        }
    }
})

function nav(base: string): DefaultTheme.NavItem[] {
    return [
        { text: "Home", link: base },
        {
            text: 'Navigation', 
            activeMatch: base,
            items: [
                {
                    text: 'VitePress2.0 Documents',
                    link: base + 'vitepress/快速开始'
                },
                {
                    text: 'C# Learning Notes',
                    link: base + 'csharp/简介'
                }
            ]
        }
    ]
}

function sidebarEnvironment(): DefaultTheme.SidebarItem[] {
    return [

    ]
}

function sidebarVitePress(): DefaultTheme.SidebarItem[] {
    return [
        
    ]
}

