<template>
    <section class="py-8 bg-gray-50">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Our Partners</h2>
        <div class="marquee-container overflow-hidden relative">
          <div class="marquee flex">
            <div
              v-for="(partner, index) in partners"
              :key="index"
              class="marquee-item flex-shrink-0"
            >
              <img
                :src="partner.image"
                :alt="'Partner ' + (index + 1)"
                class="h-40 mx-4 object-contain"
              />
            </div>
            <!-- Duplicate for seamless scrolling -->
            <div
              v-for="(partner, index) in partners"
              :key="'duplicate-' + index"
              class="marquee-item flex-shrink-0"
            >
              <img
                :src="partner.image"
                :alt="'Partner ' + (index + 1)"
                class="h-40 mx-4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const partners = ref([
    { image: require("@/assets/partners/mipromalo.jpeg") },
    { image: require("@/assets/partners/logouy1.png") },
    { image: require("@/assets/partners/polytech.jpg") },
    { image: require("@/assets/partners/unimore.png") },
    { image: require("@/assets/partners/bangui.png") },
    { image: require("@/assets/partners/norwest.png") },
    { image: require("@/assets/partners/limoges.jpg") },
    { image: require("@/assets/partners/bangui.png") },
  ]);
  </script>
  
  <style scoped>
  /* Marquee container to handle overflow */
  .marquee-container {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
  }
  
  /* Marquee animation */
  .marquee {
    display: flex;
    animation: scroll 10s linear infinite;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  /* Marquee items */
  .marquee-item {
    flex-shrink: 0;
    display: inline-block;
    margin: 0 1rem;
  }
  </style>
  