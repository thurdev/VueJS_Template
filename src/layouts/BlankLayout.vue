<template>
    <div>
        <!-- <SidebarComponent></SidebarComponent> -->
        <router-view :style="{ 'margin-left': $store.getters.sidebarWidth }" style="padding-left: 3em;padding-top: 1em;"></router-view>
    </div>
</template>

<script>
// import SidebarComponent from '@/components/Sidebar/SidebarComponent'
export default {
    name: 'BlankLayout',
    
    // components: { SidebarComponent }
}
</script>