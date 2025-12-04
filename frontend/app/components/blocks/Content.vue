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
<style>
/* Root: typografie wie Tailwind Prose */
.strapi-richtext {
  color: #1f2937; /* gray-800 */
  line-height: 1.75;
  font-size: 1rem;
}

.strapi-richtext > *:first-child {
  margin-top: 0;
}
.strapi-richtext > *:last-child {
  margin-bottom: 0;
}

/* Paragraph */
.strapi-richtext p {
  margin: 1.25em 0;
}

/* Headings */
.strapi-richtext h1,
.strapi-richtext h2,
.strapi-richtext h3,
.strapi-richtext h4 {
  color: #111827; /* gray-900 */
  font-weight: 700;
  line-height: 1.25;
  margin-top: 2em;
  margin-bottom: 0.75em;
}

.strapi-richtext h1 {
  font-size: 2.25rem;
}
.strapi-richtext h2 {
  font-size: 1.875rem;
}
.strapi-richtext h3 {
  font-size: 1.5rem;
}
.strapi-richtext h4 {
  font-size: 1.25rem;
}

/* Lists */
.strapi-richtext ul,
.strapi-richtext ol {
  margin: 1.25em 0;
  padding-left: 1.5rem;
}

.strapi-richtext li {
  margin: 0.5em 0;
}

.strapi-richtext ul {
  list-style-type: disc;
}
.strapi-richtext ol {
  list-style-type: decimal;
}

/* Links */
.strapi-richtext a {
  color: #2563eb; /* blue-600 */
  text-decoration: underline;
  font-weight: 500;
}

/* Strong */
.strapi-richtext strong {
  font-weight: 700;
  color: #111827;
}

/* Code Inline */
.strapi-richtext code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  background: #f3f4f6; /* gray-100 */
  padding: 0.1rem 0.25rem;
  border-radius: 4px;
  font-size: 0.875em;
}

/* Code Block */
.strapi-richtext pre {
  background: #1f2937; /* gray-800 */
  color: #f3f4f6;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  margin: 1.5em 0;
  overflow-x: auto;
  font-size: 0.9rem;
}

/* Image */
.strapi-richtext img {
  margin: 2em 0;
  border-radius: 6px;
}

/* Blockquote */
.strapi-richtext blockquote {
  margin: 1.5em 0;
  padding-left: 1rem;
  border-left: 4px solid #e5e7eb; /* gray-300 */
  color: #4b5563; /* gray-600 */
  font-style: italic;
  font-size: 1.1rem;
}

/* HR */
.strapi-richtext hr {
  margin: 3em 0;
  border: none;
  border-top: 1px solid #e5e7eb;
}

</style>
