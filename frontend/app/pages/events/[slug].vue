<script setup>
const route = useRoute();
const config = useRuntimeConfig();

const STRAPI_URL = config.public.strapiUrl;
const slug = route.params.slug;

if (!slug) {
    throw createError({
        statusCode: 400,
        statusMessage: "Kein Slug vorhanden"
    });
}

const { data: item } = await useAsyncData(
    `event-${slug}`,
    async () => {
        try {
            const res = await $fetch(`${STRAPI_URL}/api/events`, {
                query: {
                    'filters[slug][$eq]': slug,
                    pLevel: '6'
                }
            });

            const event = res?.data?.[0];
            if (!event) {
                throw createError({ statusCode: 404, statusMessage: "Event nicht gefunden" });
            }
            return event;
        } catch (err) {
            if (err.statusCode) throw err;

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

const formatEU = (date) => {
  return new Date(date).toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  })
}
</script>

<template>
    <div class="w-full">
        <section
            class="w-full h-72 md:h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat px-6"
            :style="item?.image?.url ? `background-image:url(${useStrapiMedia(item?.image?.url)})` : ''"
        >
            <div class="bg-black/60 text-white p-8 rounded-2xl max-w-2xl text-center">
                <h1 class="text-4xl font-bold mb-4">{{ item?.title }}</h1>
                <p class="text-lg" v-if="item?.startdate">{{ formatEU(item?.startdate) }}</p>
            </div>
        </section>

        <section class="max-w-5xl mx-auto px-6 py-16 space-y-8">
            <article class="bg-white rounded-2xl shadow p-6 md:p-10">
                <h2 class="text-2xl font-semibold mb-4">Über das Event</h2>
                <p class="text-lg text-gray-700 whitespace-pre-line">
                    {{ item?.description || 'Zu diesem Event reichen wir die Beschreibung in Kürze nach.' }}
                </p>
            </article>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white rounded-2xl shadow p-6 space-y-4">
                    <div>
                        <h3 class="text-xl font-semibold">Start</h3>
                        <p class="text-gray-700">{{ formatEU(item?.startdate) }}</p>
                    </div>
                    <div v-if="item?.enddate">
                        <h3 class="text-xl font-semibold">Ende</h3>
                        <p class="text-gray-700">{{ formatEU(item?.enddate) }}</p>
                    </div>
                </div>
                <div v-if="item?.poster" class="rounded-2xl overflow-hidden shadow">
                    <img
                        :src="useStrapiMedia(item?.poster?.url)"
                        :alt="item?.title"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    </div>
</template>
