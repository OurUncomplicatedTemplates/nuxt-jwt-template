<template>
    <div>
        <h1>Welcome to the {{ homepage }}</h1>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "public",
});

let homepage = "homepage"
</script>