<script setup>
const props = defineProps({
    event: {
        type: Object,
        required: true
    }
});

console.log('Event item data:', props.event);


const formatEU = (date) => {
  return new Date(date).toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
    // no 'second' → no seconds displayed
  })
}
</script>
<template>
    <NuxtLink
        :to="event?.id ? `/events/${event.documentId}` : '#'"
        class="p-6 bg-white shadow rounded-2xl transition hover:shadow-lg"
        :aria-disabled="!event?.id"
    >
        <img :src="useStrapiMedia(event?.poster?.url)" :alt="event.title" class="mb-4 rounded-lg w-full h-48 object-cover" v-if="event?.poster?.url" />
        <h4 class="text-xl font-bold mb-2">{{ event.title }}</h4>
        <p class="text-sm text-gray-600">{{ formatEU(event.startdate) }}</p>
    </NuxtLink>
</template>
