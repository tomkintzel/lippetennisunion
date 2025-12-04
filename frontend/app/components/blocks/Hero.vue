<template>
    <section class="w-full h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat px-6"
        :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <div class="bg-white/80 p-8 rounded-2xl max-w-xl text-center shadow-lg">
            <h2 class="text-4xl font-extrabold mb-4">{{ title }}</h2>
            <p class="text-lg mb-6">{{ subtitle }}</p>

            <NuxtLink v-if="button?.link" :to="button?.link"
                class="px-6 py-3 rounded-xl font-semibold bg-ltu-blue text-white hover:bg-ltu-yellow transition">
                {{ button?.text }}
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStrapiMedia } from '#imports' // ggf. anderer Import nötig

const props = defineProps({
    title: String,
    subtitle: String,
    button: Object,
    image: Object
})

const imageUrl = computed(() =>
    useStrapiMedia(props.image?.data?.attributes?.url || props.image?.url || '')
)
</script>
