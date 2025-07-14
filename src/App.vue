<script setup lang="ts">

</script>

<template>
    <div :class="$style['wrapper']">
        <h1>
            <img :class="$style['logo']" src="./assets/logo.svg" width="500" height="132" alt="Front Factory"
                 fetchpriority="high"/>
        </h1>
    </div>
</template>

<style module lang="scss">
@use "./assets/sass/styles";
</style>
