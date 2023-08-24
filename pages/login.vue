<template>
    <UCard class="w-8/12 mt-40 mx-auto">
        <h1 class="text-primary-400 font-bold text-4xl mb-6">Login</h1>
        <UForm ref="form" :validate="validate" :state="state" @submit.prevent="submit">

            <UFormGroup label="Email" name="email" class="mb-5">
                <UInput v-model="state.email" placeholder="you@example.com" icon="i-heroicons-envelope" />
            </UFormGroup>

            <UFormGroup label="Password" name="password" class="my-5">
                <UInput v-model="state.password" type="password" placeholder="********" icon="i-heroicons-lock-closed"  />
            </UFormGroup>

            <UButton type="submit" class="mt-8" block>
                <b>Submit</b>
            </UButton>
        </UForm>
    </UCard>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "public",
});

let user = await useAuth();

if (user !== null) {
    navigateTo('/user');
}

import type { FormError } from '@nuxthq/ui/dist/runtime/types'

let email: string | undefined = undefined;
let password: string | undefined = undefined;

const state = ref({
    email: email,
    password: password
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return errors
}

const form = ref()

async function submit() {
    await form.value!.validate()

    try {
        const runtimeConfig = useRuntimeConfig()
        const { data } = await useFetch(`${runtimeConfig.public.apiBaseUrl}/auth/login`, {
            method: 'POST',
            body: {
                'email': state.value.email,
                'password': state.value.password,
            }
        })

        console.log(data);
        console.log(data.value.accessToken)
        localStorage.setItem(ACCESS_TOKEN_KEY, data.value.accessToken)

        navigateTo('/user');
    } catch (error) {
        console.log(error.response);
    }
}
</script>