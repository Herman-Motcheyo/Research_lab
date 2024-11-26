<template>
  <div class="carousel-container">
    <swiper
      :slides-per-view="1"
      navigation
      pagination
      loop
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <img :src="slide.image" alt="Slide Image" />
          <div class="slide-overlay">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </swiper-slide>


      <!-- Pagination -->
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

// Reactive state using Composition API
const slides = ref([
  {
    image: require("@/assets/home/slide1.jpg"),
    title: 'BRAINSTORMING AFTER THURSDAY MEETING',
    description: 'This group promotes excellence',
  },
  {
    image: require("@/assets/home/slide4.jpg"),
    title: 'ARTIFICIAL INTELLIGENCE IN MATERIALS SCIENCE',
    description: 'Description for the second slide.',
  },
  {
    image: require("@/assets/home/slide2.jpg"),
    title: 'CONFERENCE',
    description: 'Description for the second slide.',
  }
]);
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.slide-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px; /* Adjust height as needed */
}

.slide-content img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  background: rgba(255, 0, 0, 0.7); /* Red overlay */
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;
}

.swiper-button-prev, .swiper-button-next {
  color: #fff;
  background-color: #ff0000; /* Red color for navigation buttons */
  padding: 10px;
  border-radius: 50%;
}
</style>
