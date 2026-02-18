<template>
    <section class="px-6 py-16 bg-ltu-blue">
        <div class="max-w-4xl mx-auto text-center text-white">
            <h3 class="text-3xl font-bold mb-4">{{ title }}</h3>
            <p class="text-lg mb-8" v-if="text">{{ text }}</p>
            <NuxtLink v-if="button" :to="buttonHref"
                class="inline-block px-6 py-3 rounded-xl font-semibold bg-ltu-yellow text-black hover:bg-yellow-300 transition">
                {{ button.text }}
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: String,
    text: String,
    button: Object
})

const buttonHref = computed(() => {
    if (props.button?.seiten?.slug) return `/${props.button.seiten.slug}`
    return props.button?.link || '#'
})
</script>
