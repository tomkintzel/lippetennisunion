<script setup>
const props = defineProps({
  content: { type: Array, required: true },
  assets: { type: Array, default: () => [] },
  isRoot: { type: Boolean, default: true }
});

const renderText = (text, formats = {}) => {
  let out = text;
  if (formats.bold) out = `<strong>${out}</strong>`;
  if (formats.italic) out = `<em>${out}</em>`;
  if (formats.underline) out = `<u>${out}</u>`;
  if (formats.strikethrough) out = `<s>${out}</s>`;
  if (formats.code) out = `<code>${out}</code>`;
  return out;
};

const getAssetUrl = (id) => {
  const asset = props.assets.find((a) => a.id === id);
  return asset?.url || '';
};
</script>

<template>
  <!-- ROOT WRAPPER (nur einmal) -->
  <section v-if="isRoot" class="py-16">
    <div class="container max-w-6xl mx-auto px-4">
      <div class="strapi-richtext">

        <BlocksContent
          :content="content"
          :assets="assets"
          :is-root="false"
        />

      </div>
    </div>
  </section>

  <!-- CHILDREN: KEIN WRAPPER -->
  <template v-else>
    <template v-for="(node, index) in content" :key="index">

      <!-- TEXT -->
      <span
        v-if="node.type === 'text'"
        v-html="renderText(node.text, node)"
      />

      <!-- PARAGRAPH -->
      <p v-else-if="node.type === 'paragraph'">
        <BlocksContent :content="node.children" :assets="assets" :is-root="false" />
      </p>

      <!-- HEADINGS -->
      <component
        v-else-if="node.type === 'heading'"
        :is="'h' + node.level"
        class="mt-4 mb-2 font-bold"
      >
        <BlocksContent :content="node.children" :assets="assets" :is-root="false" />
      </component>

      <!-- UNORDERED LIST -->
      <ul v-else-if="node.type === 'list' && node.format === 'unordered'">
        <li v-for="(child, i) in node.children" :key="i">
          <BlocksContent :content="child.children" :assets="assets" :is-root="false" />
        </li>
      </ul>

      <!-- ORDERED LIST -->
      <ol v-else-if="node.type === 'list' && node.format === 'ordered'">
        <li v-for="(child, i) in node.children" :key="i">
          <BlocksContent :content="child.children" :assets="assets" :is-root="false" />
        </li>
      </ol>

      <!-- LINK -->
      <a
        v-else-if="node.type === 'link'"
        :href="node.url"
        target="_blank"
        rel="noopener"
        class="text-blue-600 underline"
      >
        <BlocksContent :content="node.children" :assets="assets" :is-root="false" />
      </a>

      <!-- IMAGE -->
      <img
        v-else-if="node.type === 'image'"
        :src="getAssetUrl(node.image?.id)"
        :alt="node.image?.alternativeText || ''"
        class="my-4"
      />

      <!-- CODE BLOCK -->
      <pre v-else-if="node.type === 'code'">
        <code>{{ node.text }}</code>
      </pre>

      <!-- FALLBACK -->
      <pre v-else class="text-xs text-red-500">{{ node }}</pre>

    </template>
  </template>
</template>
