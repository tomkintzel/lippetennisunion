<script setup>
const route = useRoute();
const config = useRuntimeConfig();

const STRAPI_URL = config.public.strapiUrl;
const id = route.params.id;

if (!id) {
    throw createError({
        statusCode: 400,
        statusMessage: "Keine ID vorhanden"
    });
}

const { data: item } = await useAsyncData(
    `post-${id}`,
    async () => {
        try {
            const res = await $fetch(`${STRAPI_URL}/api/posts/${id}`, {
                query: { pLevel: '6' }
            });

            return res?.data;
        } catch (err) {
            const statusCode =
                err?.status ||
                err?.response?.status ||
                err?.data?.error?.status ||
                500;

            const statusMessage =
                err?.data?.error?.message ||
                err?.response?._data?.error?.message ||
                err?.message ||
                err?.statusText ||
                "Unbekannter Serverfehler";

            throw createError({ statusCode, statusMessage });
        }
    }
);

const formatDate = (date) => {
    return new Date(date).toLocaleDateString("de-DE", {
        timeZone: "Europe/Berlin",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};
</script>

<template>
    <div class="w-full">
        <section
            class="w-full h-72 md:h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat px-6"
            :style="item?.image?.url ? `background-image:url(${useStrapiMedia(item?.image?.url)})` : ''"
            :class="{ 'bg-ltu-blue': !item?.image?.url }"
        >
            <div class="bg-black/60 text-white p-8 rounded-2xl max-w-2xl text-center">
                <h1 class="text-4xl font-bold mb-2">{{ item?.title }}</h1>
                <p class="text-sm text-white/80" v-if="item?.createdAt">{{ formatDate(item.createdAt) }}</p>
            </div>
        </section>

        <section class="max-w-5xl mx-auto px-6 py-16 space-y-8" v-if="item?.description">
            <article class="bg-white rounded-2xl shadow p-6 md:p-10">
                <p class="text-lg text-gray-700 whitespace-pre-line">{{ item.description }}</p>
            </article>
        </section>

        <DynamicRenderer :zone="item?.content || []" />
    </div>
</template>
