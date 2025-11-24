import { defineAsyncComponent } from 'vue';

export function useDynamicZone(zoneData) {
  if (!zoneData || !Array.isArray(zoneData)) return [];

  return zoneData.map((item, index) => {
    if (!item.__component) return null;

    // Strapi format: "blocks.text"
    const [folder, name] = item.__component.split('.'); // ["blocks", "text"]

    // Convert "text" → "Text", "rich-text" → "RichText"
    const fileName = name
      .split('-')
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join('');

    // Async import from components/blocks/
    const asyncComponent = defineAsyncComponent(() =>
      import(`~/components/${folder}/${fileName}.vue`)
    );

    return {
      id: item.id || index,
      component: asyncComponent,
      props: item
    };
  }).filter(Boolean);
}
