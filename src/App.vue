<template>
  <TopBarComponent/>
  <router-view></router-view> 
  <CarouselsParComponent/>
  <FooterComponent/>
</template>

<script setup>
import TopBarComponent from './components/layout/TopBarComponent.vue';
import CarouselsParComponent from './components/layout/CarouselsParComponent.vue'
import FooterComponent from './components/layout/FooterComponent.vue';
</script>

<style>

</style>