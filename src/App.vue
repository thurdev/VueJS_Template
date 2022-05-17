<template>
    <div>
        <transition name="fade" mode="out-in">
            <component :is="layout">
                <router-view></router-view>
            </component>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        layout(){
            return (this.$route.meta.layout || "blank-layout") 
        }
    },
    components: {

    }
}
</script>

<style>
body{
    padding: 0;
    margin: 0;
}

body::-webkit-scrollbar {
  width: 2px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: transparent;        /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: #232859;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
