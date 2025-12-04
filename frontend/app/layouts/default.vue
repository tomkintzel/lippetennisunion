<template>
    <div class="min-h-screen flex flex-col bg-white text-black">
        <!-- Header -->
        <header class="w-full border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <NuxtLink to="/">
                <img src="/img/ltu-logo.png" alt="Lippe Tennis Union Logo" class="h-10 w-auto" />
            </NuxtLink>

            <!-- Desktop Nav -->

            <nav class="hidden md:flex space-x-6 font-medium">
                <NuxtLink v-for="item in menu.menuitems" :key="item.id" :to="resolveLink(item)"
                    class="hover:text-ltu-yellow hover:cursor-pointer">
                    {{ item.text }}
                </NuxtLink>
            </nav>

            <!-- Mobile Hamburger -->
            <button @click="mobileOpen = !mobileOpen" class="md:hidden focus:outline-none">
                <Menu class="text-3xl" />
            </button>
        </header>


        <transition name="fade">
            <nav v-if="mobileOpen"
                class="md:hidden border-b border-gray-200 px-6 py-4 flex flex-col space-y-4 font-medium bg-white">
                <NuxtLink v-for="item in menu.menuitems" :key="item.id" :to="resolveLink(item)"
                    @click="mobileOpen = false" class="hover:text-ltu-instagramPink">
                    {{ item.text }}
                </NuxtLink>
            </nav>
        </transition>


        <!-- Main Content -->
        <main class="flex-1">
            <slot />
        </main>


        <!-- Footer -->
        <footer class="w-full text-center py-8 border-t border-gray-200 text-sm">
            <p class="font-semibold">{{ settings?.name }}</p>
            <p class="text-gray-600">{{ settings?.email }}</p>
            <div class="mt-4 space-x-4">
                <NuxtLink to="/impressum" class="text-ltu-blue hover:underline">Impressum</NuxtLink>
                <NuxtLink to="/datenschutz" class="text-ltu-blue hover:underline">Datenschutz</NuxtLink>
            </div>
            <p class="text-gray-500 mt-2">© {{ currentYear }} Lippe Tennis Union</p>
        </footer>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { Menu } from 'lucide-vue-next'
// setting
const { data: settings } = await useStrapi().find('setting');
const { data: menu } = await useStrapi().find('menu', {
    populate: {
        menuitems: {
            populate: '*'
        }
    }
})

// Hilfsfunktion zum Link bauen
const resolveLink = (item) => {
    // Wenn externer Link
    if (item.link) {
        return item.link
    }

    // Wenn eine Seite verknüpft ist
    if (item.seiten && item.seiten.slug) {
        return `/${item.seiten.slug}`
    }

    // Fallback
    return '#'
}

const mobileOpen = ref(false)
// current year for footer
const currentYear = new Date().getFullYear()

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
