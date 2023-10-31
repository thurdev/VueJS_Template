<template>
  <div>
    <component :is="layout" class="view-container"> </component>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

const layout = computed(function() {
  return route.meta?.layout || 'blank-layout';
})
</script>

<style>
@import './index.css';
</style>
