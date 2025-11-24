<template>
    <DynamicRenderer :zone="page?.content || []" />
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;
console.log('News ID:', slug);

const { data: page, error} = await useAsyncData(
    'page:' + slug,
    () => useStrapi().find('pages', {
        'filters[slug][$eq]': slug,
        'pLevel': '6'
    }).then(res => res?.data[0])
)

// const { data: page } = await useStrapi().find('pages', {
//     'filters[slug][$eq]': slug,
//     'pLevel': '6'
// });


console.log('News Page Data:', page.value);
</script>
