<template>
    <div class="mt-40 mx-auto">
        <h1 class="text-center">Welcome to the {{ homepage }}</h1>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "public",
});

let homepage = "homepage"
</script>