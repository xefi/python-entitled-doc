export default defineAppConfig({
    ui: {
        primary: 'green',
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
            alt: '',
            light: '',
            dark: ''
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
        credits: 'Copyright © 2023',
        colorMode: false,
        links: [{
            'icon': 'i-simple-icons-github',
            'to': 'https://github.com/xefi/python-entitled-docs',
            'target': '_blank',
            'aria-label': 'Doc on GitHub'
        }]
    },
    toc: {
    }
})
