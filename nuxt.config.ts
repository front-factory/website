// https://nuxt.com/docs/api/configuration/nuxt-config
import { SITE_URL, SITE_DESCRIPTION, SITE_TITLE } from './config';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {
        enabled: true
    },
    modules: [
        '@nuxtjs/sitemap',
        'nuxt-gtag'
    ],
    app: {
        head: {
            title: `${ SITE_TITLE }`,
            htmlAttrs: {
                lang: 'fr'
            },
            meta: [
                {
                    name: 'charset',
                    content: 'UTF-8'
                },
                {
                    name: 'description',
                    content: `${ SITE_DESCRIPTION }`
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, viewport-fit=cover'
                },
                {
                    name: 'og:title',
                    content: `${ SITE_TITLE }`
                },
                {
                    name: 'og:description',
                    content: `${ SITE_DESCRIPTION }`
                },
                {
                    name: 'og:image',
                    content: `${ SITE_URL }/favicon.png`
                },
                {
                    name: 'og:url',
                    content: `${ SITE_URL }`
                }
            ],
            link: [
                {
                    rel: 'canonical',
                    href: `${ SITE_URL }`
                },
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.png'
                }
            ]
        }
    },
    css: [
        '@/assets/sass/styles.scss'
    ],
    site: {
        url: `${ SITE_URL }`,
        name: `${ SITE_DESCRIPTION }`
    },
    gtag: {
        id: 'G-3Z9X6PCKWD'
    }
});
