export default defineAppConfig({
    ui: {
        primary: 'red',
        gray: 'slate',
        footer: {
            bottom: {
                left: 'text-sm text-gray-500 dark:text-gray-400',
                wrapper: 'border-t border-gray-200 dark:border-gray-800'
            }
        }
    },
    seo: {
        siteName: 'Entitled - Documentation'
    },
    header: {
        logo: {
            alt: 'XEFI Logo',
            light: '/xefi-light.svg',
            dark: '/xefi-dark.svg'
        },
        search: true,
        colorMode: true,
        links: [{
            'icon': 'i-simple-icons-github',
            'to': 'https://github.com/xefi/python-entitled',
            'target': '_blank',
            'aria-label': 'Entitled on Github'
        }]
    },
    footer: {
        credits: 'Copyright © ' + (new Date().getFullYear()),
        colorMode: false,
        links: [{
            'icon': 'i-simple-icons-github',
            'to': 'https://github.com/xefi/python-entitled-docs',
            'target': '_blank',
            'aria-label': 'Doc on GitHub'
        }]
    },
    toc: {
        title: 'Table of Contents',
        bottom: {
            title: 'Community',
            edit: 'https://github.com/xefi/python-entitled-docs/edit/main/content',
            links: [{
                icon: 'i-heroicons-star',
                label: 'Star on GitHub',
                to: 'https://github.com/xefi/python-entitled',
                target: '_blank'
            }]
        }
    }
})
