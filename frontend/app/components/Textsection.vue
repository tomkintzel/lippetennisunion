<template>
    <section class="px-6 py-16 max-w-4xl mx-auto text-center">
        <h3 class="text-3xl font-bold mb-4">{{ title }}</h3>
        <p class="text-lg text-gray-700">
            {{ text }}
        </p>
    </section>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    });
</script>
