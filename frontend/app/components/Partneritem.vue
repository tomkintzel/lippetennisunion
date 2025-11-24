<script setup>
const props = defineProps({
    partner: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <NuxtLink :to="`/partners/${partner?.documentId}`" target="_blank" rel="noopener noreferrer">
        <div
            class="flex flex-col items-center justify-center bg-slate-50 rounded-2xl shadow p-8"
        >
            <img
                :src="useStrapiMedia(partner?.logo?.url)"r
                :alt="partner?.title || 'Partner Logo'"
                class="max-h-16 object-contain"
                v-if="partner?.logo?.url"
            />
            <span class="text-xl font-semibold text-gray-800">
                {{ partner?.title || 'Partner' }}
            </span>
        </div>
    </NuxtLink>
</template>
