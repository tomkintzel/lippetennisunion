<template>
    <div class="min-h-screen flex flex-col bg-white text-black">
        <!-- Header -->
        <header class="w-full border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <NuxtLink to="/">
                <img src="/img/ltu-logo.png" alt="Lippe Tennis Union Logo" class="h-10 w-auto" />
            </NuxtLink>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex space-x-6 font-medium">
                <NuxtLink to="/" class="hover:text-ltu-yellow hover:cursor-pointer">Start</NuxtLink>
                <NuxtLink to="https://tennishalle-pivitsheide.de" class="hover:text-ltu-yellow hover:cursor-pointer">Hallenbuchung</NuxtLink>
                <NuxtLink to="/events" class="hover:text-ltu-yellow hover:cursor-pointer">Events</NuxtLink>
                <NuxtLink to="/about" class="hover:text-ltu-yellow hover:cursor-pointer">Über uns</NuxtLink>
                <NuxtLink to="/contact" class="hover:text-ltu-yellow hover:cursor-pointer">Kontakt</NuxtLink>
            </nav>

            <!-- Mobile Hamburger -->
            <button @click="mobileOpen = !mobileOpen" class="md:hidden focus:outline-none">
                <Menu class="text-3xl" />
            </button>
        </header>


        <!-- Mobile Nav -->
        <transition name="fade">
            <nav v-if="mobileOpen"
                class="md:hidden border-b border-gray-200 px-6 py-4 flex flex-col space-y-4 font-medium bg-white">
                <NuxtLink to="/" @click="mobileOpen = false" class="hover:text-ltu-instagramPink">Start</NuxtLink>
                <NuxtLink to="https://tennishalle-pivitsheide.de" @click="mobileOpen = false"
                    class="hover:text-ltu-instagramPink">Hallenbuchung
                </NuxtLink>
                <NuxtLink to="/events" @click="mobileOpen = false" class="hover:text-ltu-instagramPink">Events
                </NuxtLink>
                <NuxtLink to="/about" @click="mobileOpen = false" class="hover:text-ltu-instagramPink">Über uns
                </NuxtLink>
                <NuxtLink to="/contact" @click="mobileOpen = false" class="hover:text-ltu-instagramPink">Kontakt
                </NuxtLink>
            </nav>
        </transition>


        <!-- Main Content -->
        <main class="flex-1">
            <slot />
        </main>


        <!-- Footer -->
        <footer class="w-full text-center py-8 border-t border-gray-200 text-sm">
            <p class="font-semibold">Lippe Tennis Union</p>
            <p class="text-gray-600">info@lippe-tennis-union.de</p>
            <p class="text-gray-500 mt-2">© 2025 Lippe Tennis Union</p>
        </footer>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { Menu } from 'lucide-vue-next'
const mobileOpen = ref(false)

</script>


<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>