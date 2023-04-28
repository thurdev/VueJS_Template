<template>
  <div style="position: relative">
    <transition name="component-fade" mode="out-in">
      <router-view class="_padding-top769w"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AuthenticatedLayout',
};
</script>

<style></style>
