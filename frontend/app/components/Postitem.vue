<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
});

const truncate = (text, length = 120) => {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
};
</script>
<template>
    <NuxtLink
        :to="post?.id ? `/news/${post.documentId}` : '#'"
        class="p-6 bg-white shadow rounded-2xl transition hover:shadow-lg"
        :aria-disabled="!post?.id"
    >
        <img :src="useStrapiMedia(post?.image?.url)" :alt="post.title" class="mb-4 rounded-lg w-full h-48 object-cover" v-if="post?.image?.url" />
        <h4 class="text-xl font-bold mb-2">{{ post.title }}</h4>
        <p class="text-sm text-gray-600" v-if="post.description">{{ truncate(post.description) }}</p>
    </NuxtLink>
</template>
