<template>
    <section class="px-6 py-16 bg-white">
        <div class="max-w-4xl mx-auto text-center">
            <h3 class="text-3xl font-bold mb-4">{{ title }}</h3>
            <p v-if="text" class="text-lg text-gray-700 mb-8">{{ text }}</p>
        </div>
        <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            v-if="partners && partners.length > 0">
            <Partneritem v-for="partner in partners" :key="partner.id" :partner="partner" />
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    title: String,
    text: String,
    partners: Array
})
</script>
