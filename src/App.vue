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
        }
    ]
});
</script>

<template>
    <div :class="$style['wrapper']">
        <h1>
            <img :class="$style['logo']" src="/logo.svg" width="500" height="132" alt="Front Factory"
                 fetchpriority="high"/>
        </h1>
    </div>
</template>

<style module lang="scss">
@use "./assets/sass/styles";
</style>
