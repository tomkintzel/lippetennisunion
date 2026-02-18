<template>
    <section class="px-6 py-8 max-w-4xl mx-auto text-center">
        <NuxtLink :to="href"
            class="inline-block px-6 py-3 rounded-xl font-semibold bg-ltu-blue text-white hover:bg-ltu-yellow hover:text-black transition">
            {{ text }}
        </NuxtLink>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    text: String,
    link: String,
    seiten: Object
})

const href = computed(() => {
    if (props.seiten?.slug) return `/${props.seiten.slug}`
    return props.link || '#'
})
</script>
