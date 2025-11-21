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
    `resource-${id}`,
    async () => {
        try {
            const res = await $fetch(`${STRAPI_URL}/api/events/${id}`, {
                query: { populate: "*" }
            });

            return res?.data;
        } catch (err) {
            // ERROR WIRKLICH IMMER SICHER AUSLESEN
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
</script>

<template>
    <div v-if="item">
        <h2>ID: {{ item.id }}</h2>
        <pre>{{ item.title }}</pre>
    </div>

    <div v-else>
        Wird geladen…
    </div>
</template>
