<template>
    <div class="w-full">
        <!-- Hero Section -->
        <!-- add strapi url to style background image -->
        <section class="w-full h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat px-6"
            :style="{ backgroundImage: `url(${imageUrl})` }">
            <div class="bg-white/80 p-8 rounded-2xl max-w-xl text-center shadow-lg">
                <h2 class="text-4xl font-extrabold mb-4">{{ homepage?.hero?.title }}</h2>
                <p class="text-lg mb-6">{{ homepage?.hero?.subtitle }}</p>
                <NuxtLink :to="homepage?.hero?.button?.link"
                    class="px-6 py-3 rounded-xl font-semibold bg-ltu-blue text-white hover:bg-ltu-yellow transition">
                    {{ homepage?.hero?.button?.text }}
                </NuxtLink>
            </div>
        </section>
        <Textsection :title="homepage?.about?.title" :text="homepage?.about?.text" />
        <!-- Events Section -->
        <section class="px-6 py-16 bg-gray-100">
            <div class="max-w-6xl mx-auto">
                <h3 class="text-3xl font-bold text-center mb-12">{{ homepage?.eventssection?.title }}</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8" v-if="homepage?.eventssection?.events && homepage.eventssection.events.length > 0">
                    <Eventitem v-for="event in homepage?.eventssection?.events" :key="event.id" :event="event" />
                </div>
                <div class="grid grid-cols-1 max-w-xl place-items-center mx-auto" v-else>
                    <div class="bg-white shadow rounded-2xl p-6 mt-8 text-center">
                        <p>Zur Zeit keine Events geplant</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Partners Section -->
        <section id="partners" class="px-6 py-16 bg-white">
            <div class="max-w-4xl mx-auto text-center">
                <h3 class="text-3xl font-bold mb-4">{{ homepage?.partners?.title }}</h3>
                <p class="text-lg text-gray-700 mb-8">{{ homepage?.partners?.text }}</p>
            </div>
            <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                v-if="homepage?.partners?.partners && homepage.partners.partners.length > 0">
                <Partneritem v-for="partner in homepage?.partners?.partners" :key="partner.id" :partner="partner" />
            </div>
            <div class="max-w-xl mx-auto grid grid-cols-1 place-items-center" v-else>
                <div
                    class="flex flex-col items-center justify-center bg-slate-50 rounded-2xl shadow transition hover:shadow-lg p-8">
                    <span class="text-xl font-semibold text-gray-800">
                        <NuxtLink to="/contact" class="text-ltu-blue hover:underline">
                            Jetzt Partner werden!
                        </NuxtLink>
                    </span>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// fetch data from strapi backend homepage site
const { data: homepage } = await useStrapi().find('homepage', { 'pLevel': '6' });
const imageUrl = computed(() => useStrapiMedia(homepage.hero?.image?.url || ''));
console.log('Homepage data:', homepage);
</script>

<style>
/* Additional styles if needed */
</style>
