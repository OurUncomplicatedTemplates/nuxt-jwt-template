<template>
    <div>
        <header class="">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <NuxtLink to="/" class="-m-1.5 p-1.5">
                        <span class="text-xl "><span class="text-primary-400 ">C</span>ompany</span>
                    </NuxtLink>
                </div>

                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NuxtLink to="/login" class="text-sm font-semibold leading-6">
                        Log in
                        <span aria-hidden="true">
                            &rarr;
                        </span>
                    </NuxtLink>
                </div>
            </nav>
        </header>

        <div class="container mx-auto">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>