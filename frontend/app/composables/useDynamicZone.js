import { defineAsyncComponent } from 'vue';

const blockModules = import.meta.glob('~/components/blocks/*.vue');

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

    const modulePath = `/components/${folder}/${fileName}.vue`;
    const matchedKey = Object.keys(blockModules).find(key => key.endsWith(modulePath));

    if (!matchedKey) {
      console.warn(`Block component "${folder}/${fileName}" not found, skipping.`);
      return null;
    }

    const asyncComponent = defineAsyncComponent(blockModules[matchedKey]);

    return {
      id: item.id || index,
      component: asyncComponent,
      props: item
    };
  }).filter(Boolean);
}
