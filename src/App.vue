<template>
  <div style="height: inherit">
    <transition name="fade" mode="out-in">
      <component :is="layout" class="view-container"> </component>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    layout() {
      return this.$route.meta?.layout || 'blank-layout';
    },
  },
});
</script>
