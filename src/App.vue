<template>
  <TopBarComponent/>
  <router-view></router-view> 
  <FooterComponent/>
</template>

<script setup>
import TopBarComponent from './components/layout/TopBarComponent.vue';
import FooterComponent from './components/layout/FooterComponent.vue';
</script>

<style>

</style>