<template>
    <section class="py-16">
        <div class="container max-w-4xl mx-auto px-6">
            <div class="strapi-richtext" v-html="renderedContent" />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps({
    content: {
        type: String,
        required: true
    }
})

const renderedContent = computed(() => marked.parse(props.content || ''))
</script>
