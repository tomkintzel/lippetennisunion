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

        <!-- About Section -->
        <section class="px-6 py-16 max-w-4xl mx-auto text-center">
            <h3 class="text-3xl font-bold mb-4">Über den Verein</h3>
            <p class="text-lg text-gray-700">
                Die Lippe Tennis Union steht für Leidenschaft, Teamgeist und sportliche
                Entwicklung. Vom Nachwuchs bis zu den Senioren – bei uns findet jeder seinen Platz.
            </p>
        </section>

        <!-- Events Section -->
        <section class="px-6 py-16 bg-gray-100">
            <div class="max-w-6xl mx-auto">
                <h3 class="text-3xl font-bold text-center mb-12">Bevorstehende Events</h3>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-6 bg-white shadow rounded-2xl">
                        <h4 class="text-xl font-bold mb-2">Sommerturnier 2025</h4>
                        <p class="text-sm text-gray-600">15. Juni 2025</p>
                    </div>
                    <div class="p-6 bg-white shadow rounded-2xl">
                        <h4 class="text-xl font-bold mb-2">Kids Camp</h4>
                        <p class="text-sm text-gray-600">10.–14. Juli 2025</p>
                    </div>
                    <div class="p-6 bg-white shadow rounded-2xl">
                        <h4 class="text-xl font-bold mb-2">Mixed Doppel Cup</h4>
                        <p class="text-sm text-gray-600">August 2025</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Partners Section -->
        <section id="partners" class="px-6 py-16 bg-white">
            <div class="max-w-4xl mx-auto text-center">
                <h3 class="text-3xl font-bold mb-4">Partner & Sponsoren</h3>
                <p class="text-lg text-gray-700 mb-8">Wir sind stolz auf unsere Partnerschaften, insbesondere mit der ASICS Tennis Academy.</p>
            </div>
            <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div class="flex items-center justify-center h-24 bg-slate-50 rounded-2xl shadow transition hover:shadow-lg text-xl font-semibold text-gray-800">ASICS</div>
                <div class="flex items-center justify-center h-24 bg-slate-50 rounded-2xl shadow transition hover:shadow-lg text-xl font-semibold text-gray-800">Wilson</div>
                <div class="flex items-center justify-center h-24 bg-slate-50 rounded-2xl shadow transition hover:shadow-lg text-xl font-semibold text-gray-800">Tennis Point</div>
                <!-- <div class="flex items-center justify-center h-24 bg-slate-50 rounded-2xl shadow transition hover:shadow-lg text-xl font-semibold text-gray-800">Local Sponsor</div> -->
            </div>
        </section>
    </div>
</template>

<script setup>
// fetch data from strapi backend homepage site
const { data: homepage } = await useStrapi().find('homepage', { 'pLevel': '6' });
const imageUrl = computed(() => useStrapiMedia(homepage.hero?.image?.url || ''));
</script>

<style>
/* Additional styles if needed */
</style>
