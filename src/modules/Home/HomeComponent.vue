<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section with Carousel -->
    <section class="w-full bg-white shadow-sm">
      <CarouselComponent />
    </section>

    <!-- Top Projects Section -->
    <section class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 class="text-3xl md:text-4xl font-bold text-center  mb-8 relative">
        Top  Recents Projects
        <span class="block w-20 h-1 bg-blue-500 mx-auto mt-4"></span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        <CardComponent
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :description="card.description"
          :imageUrl="card.imageUrl"
          :buttonText="card.buttonText"
          class="w-full max-w-md transform transition duration-500 hover:scale-105"
        />
      </div>
      <div class="text-right mt-4">
      <a href="/project" class="text-blue-500 hover:underline">View More Projects</a>
    </div>
    </section>

<section class="bg-white py-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <NewsComponent :numberPr= "2"/>
    <div class="text-right mt-4">
      <a href="/news" class="text-blue-500 hover:underline">View More News</a>
    </div>
  </div>
</section>


    <!-- About and Publications Section -->
    <section class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- About Section -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
          <AboutComponent class="p-6" />
        </div>

        <!-- Publications Section -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
          <PubliComponent
            class="p-6"
            :numerPub="2"
          />
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="bg-gray-50 py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <LeaderComponent class="bg-white rounded-xl shadow-lg overflow-hidden" />

        <!-- Our Team Component -->
        <div class="mt-12">
          <OurTeamComponent />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import CardComponent from '@/components/common/CardComponent.vue';
import CarouselComponent from '@/components/layout/CarouselComponent.vue';
import AboutComponent from '../about/AboutComponent.vue';
import PubliComponent from '../publications/PubliHomePage.vue';
import LeaderComponent from '../about/LeaderComponent.vue';
import NewsComponent from '../News/NewsComponent.vue';
import OurTeamComponent from '../team/OurTeamComponent.vue';

const cards = [
  {
    title: "EEPER:MD PROJECT",
    description: "EEPER:MD - Economie D'Energie et Procédés Ecoresponsables dans La Production des Infracstructure en Afrique Centrale",
    imageUrl: require("@/assets/home/eepermd.png"),
    buttonText: "EEPER:MD Project",
  },
  {
    title: "Card 2",
    description: "EEPER:MD - Economie D'Energie et Procédés Ecoresponsables dans La Production des Infracstructure en Afrique Centrale",
    imageUrl: require("@/assets/home/download.jpeg"),
    buttonText: "Flair Project",
  },
];
</script>