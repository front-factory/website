<script setup lang="ts">
import { SITE_NAME } from '~~/config';
</script>

<template>
    <div :class="$style['wrapper']">
        <h1 :class="$style['logo']">
            <picture>
                <source srcset="/logo-dark.svg" media="(prefers-color-scheme: dark)">
                <source srcset="/logo.svg" media="(prefers-color-scheme: light)">

                <img src="/logo.svg" width="500" height="132" :alt="SITE_NAME" fetchpriority="high">
            </picture>
        </h1>

        <a :class="$style['contact-link']" href="mailto:contact@frontfactory.dev">contactez-moi</a>
    </div>
</template>

<style module lang="scss">
@use "../assets/sass/styles";
</style>
