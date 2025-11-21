<script setup>
const route = useRoute();
const strapi = useStrapi();

if (!route.params.id || route.params.id === 'undefined') {
    throw createError({
        statusCode: 404,
        statusMessage: 'Ungültige Event-ID'
    });
}


const { data: event, error } = await useAsyncData(
    `event-${route.params.id}`,
    () => strapi.findOne('events', route.params.id, { populate: { image: true } })
);

if (error.value || !event.value) {
    throw createError({
        statusCode: error.value?.statusCode || 404,
        statusMessage: error.value?.message || 'Event konnte nicht gefunden werden'
    });
}

const heroImage = computed(() => useStrapiMedia(event.value?.image?.url || ''));

function formatEU(date) {
    if (!date) {
        return 'Noch kein Datum bekannt';
    }
    return new Date(date).toLocaleString("de-DE", {
        timeZone: "Europe/Berlin",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });
};
</script>
<template>
    <div class="w-full">
        <section
            class="w-full h-72 md:h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat px-6"
        >
            <div class="bg-black/60 text-white p-8 rounded-2xl max-w-2xl text-center">
                <h1 class="text-4xl font-bold mb-4">{{ event?.title }}</h1>
                <p class="text-lg" v-if="event?.startdate">{{ formatEU(event?.startdate) }}</p>
            </div>
        </section>

        <section class="max-w-5xl mx-auto px-6 py-16 space-y-8">
            <article class="bg-white rounded-2xl shadow p-6 md:p-10">
                <h2 class="text-2xl font-semibold mb-4">Über das Event</h2>
                <p class="text-lg text-gray-700 whitespace-pre-line">
                    {{ event?.description || 'Zu diesem Event reichen wir die Beschreibung in Kürze nach.' }}
                </p>
            </article>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white rounded-2xl shadow p-6 space-y-4">
                    <div>
                        <h3 class="text-xl font-semibold">Start</h3>
                        <p class="text-gray-700">{{ formatEU(event?.startdate) }}</p>
                    </div>
                    <div v-if="event?.enddate">
                        <h3 class="text-xl font-semibold">Ende</h3>
                        <p class="text-gray-700">{{ formatEU(event?.enddate) }}</p>
                    </div>
                </div>
                <div v-if="event?.image" class="rounded-2xl overflow-hidden shadow">
                    <img
                        :src="heroImage"
                        :alt="event?.title"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    </div>
</template>
