<template>
    <section class="px-6 py-16 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
        <div class="max-w-4xl mx-auto text-center text-white">
            <h3 class="text-3xl font-bold mb-4">{{ title }}</h3>
            <p class="text-lg mb-8" v-if="text">{{ text }}</p>
            <a v-if="handle" :href="`https://instagram.com/${handle.replace('@', '')}`" target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-6 py-3 rounded-xl font-semibold bg-white text-gray-900 hover:bg-gray-100 transition">
                @{{ handle.replace('@', '') }} →
            </a>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: String,
    text: String,
    handle: String
})
</script>
