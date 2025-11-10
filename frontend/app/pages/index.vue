<template>
    <div class="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white">
        <!-- Navigation -->
        <header
            class="w-full px-6 py-4 flex justify-between items-center border-b border-neutral-200 dark:border-neutral-700">
            <h1 class="text-2xl font-bold">Lippe Tennis Union</h1>
            <nav class="space-x-6">
                <a href="#about" class="hover:underline hover:cursor-pointer">Über uns</a>
                <a href="#events" class="hover:underline hover:cursor-pointer">Events</a>
                <a href="#contact" class="hover:underline hover:cursor-pointer">Kontakt</a>
            </nav>
        </header>


        <!-- Hero -->
        <section class="text-center py-24 bg-[url('/hero-tennis.jpg')] bg-cover bg-center bg-no-repeat">
            <div class="bg-black/40 dark:bg-black/60 p-8 rounded-2xl inline-block">
                <h2 class="text-5xl font-extrabold mb-4 text-white">{{homepage?.hero?.title}}</h2>
                <p class="text-lg text-white">{{homepage?.hero?.subtitle}}</p>
                <button
                    class="mt-6 px-6 py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700 transition">
                    Jetzt Mitglied werden
                </button>
            </div>
        </section>


        <!-- About -->
        <section id="about" class="px-6 py-20 max-w-4xl mx-auto text-center">
            <h3 class="text-3xl font-bold mb-4">Über den Verein</h3>
            <p class="text-lg text-neutral-600 dark:text-neutral-300">
                Die Lippe Tennis Union steht für Leidenschaft, Teamgeist und sportliche Entwicklung.
                Vom Nachwuchs bis zu den Senioren – bei uns findet jeder seinen Platz.
            </p>
        </section>


        <!-- Events -->
        <section id="events" class="px-6 py-20 bg-neutral-100 dark:bg-neutral-800">
            <div class="max-w-6xl mx-auto">
                <h3 class="text-3xl font-bold text-center mb-12">Bevorstehende Events</h3>


                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-6 bg-white dark:bg-neutral-900 shadow rounded-2xl">
                        <h4 class="text-xl font-bold mb-2">Sommerturnier 2025</h4>
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">15. Juni 2025</p>
                    </div>
                    <div class="p-6 bg-white dark:bg-neutral-900 shadow rounded-2xl">
                        <h4 class="text-xl font-bold mb-2">Kids Camp</h4>
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">10.–14. Juli 2025</p>
                    </div>
                    <div class="p-6 bg-white dark:bg-neutral-900 shadow rounded-2xl">
                        <h4 class="text-xl font-bold mb-2">Mixed Doppel Cup</h4>
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">August 2025</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Footer -->
        <footer id="contact" class="px-6 py-12 text-center border-t border-neutral-200 dark:border-neutral-700">
            <p class="mb-2 font-semibold">Lippe Tennis Union</p>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">Kontakt: info@lippe-tennis-union.de</p>
            <p class="text-xs mt-4 text-neutral-500 dark:text-neutral-500">© 2025 Lippe Tennis Union</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
const { data: homepage } = await useStrapi().find('homepage', {'populate': '*' })
console.log('Homepage from Strapi:', homepage)
</script>