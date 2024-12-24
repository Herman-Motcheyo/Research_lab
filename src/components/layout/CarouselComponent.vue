<template>
  <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <swiper
      :slides-per-view="1"
      :space-between="30"
      :navigation="true"
      :pagination="{
        clickable: true,
        dynamicBullets: true
      }"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      class="w-full"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
          <img 
            :src="slide.image" 
            :alt="slide.title"
            class="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
          />
          
          <div class="absolute inset-0 bg-gradient-to-t from-blue-900/90  to-transparent">
          </div>

          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 transform transition-all duration-500 translate-y-0 opacity-100">
              {{ slide.title }}
            </h2>
            <p class="text-sm sm:text-base md:text-lg opacity-90 max-w-3xl transform transition-all duration-500 translate-y-0">
              {{ slide.description }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = ref([
  {
    image: require("@/assets/home/slide1.jpg"),
    title: 'BRAINSTORMING AFTER THURSDAY MEETING',
    description: 'Our team meets regularly for collaborative brainstorming sessions where each member shares their innovative ideas. These weekly meetings encourage collective creativity and strengthen our team cohesion while generating innovative solutions for our research projects.',
  },
  {
    image: require("@/assets/home/slide4.jpg"),
    title: 'ARTIFICIAL INTELLIGENCE IN MATERIALS SCIENCE',
    description: 'Our laboratory is harnessing advances in artificial intelligence to revolutionise materials science. We are developing sophisticated algorithms to predict the properties of materials, optimise their design and accelerate the discovery of new compounds with exceptional characteristics.',
  },
  {
    image: require("@/assets/home/slide2.jpg"),
    title: 'CONFERENCE',
    description: 'Our researchers actively participate in major international conferences in our field, presenting their latest discoveries and establishing valuable collaborations with experts from around the world. These enriching exchanges stimulate innovation and strengthen our position in the scientific community.',
  }
]);
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  @apply hidden sm:flex items-center justify-center w-10 h-10 bg-blue-900 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  @apply text-base;
}

.swiper-pagination-bullet {
  @apply bg-white opacity-50;
}

.swiper-pagination-bullet-active {
  @apply bg-purple-900 opacity-100;
}
</style>