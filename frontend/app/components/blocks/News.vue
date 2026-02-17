<template>
    <section class="px-6 py-16 bg-gray-100">
        <div class="max-w-6xl mx-auto">
            <h3 class="text-3xl font-bold text-center mb-4">{{ title }}</h3>
            <p class="text-center text-gray-600 mb-12" v-if="text">{{ text }}</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8"
                v-if="posts && posts.length > 0">
                <Postitem v-for="post in posts" :key="post.id" :post="post" />
            </div>
            <div class="grid grid-cols-1 max-w-xl place-items-center mx-auto" v-else>
                <div class="bg-white shadow rounded-2xl p-6 mt-8 text-center">
                    <p>Zur Zeit keine Beiträge vorhanden</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

const props = defineProps([
    'id',
    'title',
    'text',
    'posts'
]);
</script>
