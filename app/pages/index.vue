<script setup lang="ts">

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
@use "../assets/sass/styles";
</style>
