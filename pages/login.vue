<template>
    <UCard class="w-8/12 mt-40 mx-auto">
        <h1 class="text-primary-400 font-bold text-4xl mb-6">Login</h1>
        <form @submit.prevent>
            <UInputGroup label="Email" hint="Required" class="mb-5" required>
                <UInput v-model="email" name="email" placeholder="you@example.com" icon="i-heroicons-envelope" />
            </UInputGroup>

            <UInputGroup label="Password" hint="Required" class="my-5" required>
                <UInput v-model="password" name="password" placeholder="********" icon="i-heroicons-lock-closed" />
            </UInputGroup>

            <UButton class="mt-8" block @click="">
                <b>Submit</b>
            </UButton>
        </form>
    </UCard>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "public",
});

let email: string = '';
let password: string = '';

function submit() {
    navigateTo('/user')
}
</script>