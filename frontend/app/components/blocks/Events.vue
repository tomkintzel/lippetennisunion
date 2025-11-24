<template>
    <section class="px-6 py-16 bg-gray-100">
        <div class="max-w-6xl mx-auto">
            <h3 class="text-3xl font-bold text-center mb-12">{{ title }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8"
                v-if="events && events.length > 0">
                <Eventitem v-for="event in events" :key="event.id" :event="event" />
            </div>
            <div class="grid grid-cols-1 max-w-xl place-items-center mx-auto" v-else>
                <div class="bg-white shadow rounded-2xl p-6 mt-8 text-center">
                    <p>Zur Zeit keine Events geplant</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

const props = defineProps([
    'id',
    'title',
    'events'
]);
</script>
