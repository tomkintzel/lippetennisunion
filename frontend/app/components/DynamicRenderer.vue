<script setup>
import { useDynamicZone } from '~/composables/useDynamicZone';

const props = defineProps({
  zone: {
    type: Array,
    default: () => []
  }
});

const blocks = computed(() => useDynamicZone(props.zone));
console.log('DynamicRenderer blocks:', blocks.value);
</script>

<template>
  <div class="content">
    <component
      v-for="block in blocks"
      :is="block.component"
      :key="block.id"
      v-bind="block.props"
    />
  </div>
</template>
