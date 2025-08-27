// https://nuxt.com/docs/api/configuration/nuxt-config
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from './config';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {
        enabled: true
    },
    modules: [
        'nuxt-gtag'
    ],
    app: {
        head: {
            title: `${ SITE_NAME } - ${ SITE_DESCRIPTION }`,
            htmlAttrs: {
                lang: 'fr'
            },
            meta: [
                {
                    name: 'charset',
                    content: 'UTF-8'
                },
                {
                    name: 'canonical',
                    content: `${ SITE_URL }`
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
                    content: `${ SITE_NAME }`
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
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.png'
                }
            ]
        }
    },
    gtag: {
        id: 'G-3Z9X6PCKWD'
    }
});
