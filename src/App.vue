<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
    link: [
        {
            rel: 'preload',
            as: 'image',
            href: '/logo.svg',
            type: 'image/svg+xml',
            fetchpriority: 'high'
        },
        {
            rel: 'preload',
            as: 'image',
            href: '/logo-dark.svg',
            type: 'image/svg+xml',
            fetchpriority: 'high'
        }
    ]
});
</script>

<template>
    <div :class="$style['wrapper']">
        <h1 :class="$style['logo']">
            <picture>
                <source srcset="/logo-dark.svg" media="(prefers-color-scheme: dark)">
                <source srcset="/logo.svg" media="(prefers-color-scheme: light)">

                <img src="/logo.svg" width="500" height="132" alt="Front Factory" fetchpriority="high">
            </picture>
        </h1>
    </div>
</template>

<style module lang="scss">
@use "./assets/sass/styles";
</style>
