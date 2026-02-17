<template>
    <div class="w-full">
        <section class="w-full h-72 md:h-96 flex items-center justify-center bg-ltu-blue px-6">
            <div class="text-white max-w-2xl text-center">
                <h1 class="text-4xl font-bold">Neuigkeiten</h1>
            </div>
        </section>

        <section class="px-6 py-16">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8" v-if="posts && posts.length > 0">
                    <Postitem v-for="post in posts" :key="post.id" :post="post" />
                </div>
                <div class="grid grid-cols-1 max-w-xl place-items-center mx-auto" v-else>
                    <div class="bg-white shadow rounded-2xl p-6 mt-8 text-center">
                        <p>Zur Zeit keine Beiträge vorhanden</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData(
    'posts',
    () => useStrapi().find('posts', {
        'pLevel': '3',
        'sort': 'createdAt:desc'
    }).then(res => res?.data)
)
</script>
