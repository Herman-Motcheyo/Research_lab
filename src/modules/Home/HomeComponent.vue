<template>
      <div>
        <CarouselComponent />
    
        <div>
          <h1 class="text-2xl font-bold text-center my-6">Top project</h1>
    
          <div class="flex flex-wrap justify-center gap-6">
            <CardComponent
              v-for="(card, index) in cards"
              :key="index"
              :title="card.title"
              :description="card.description"
              :imageUrl="card.imageUrl"
              :buttonText="card.buttonText"
              class="w-full md:w-1/3 lg:w-1/4"
            />
          </div>
        </div>
        <NewsComponent />

        <div class="group-leader my-10">
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- About Section -->
            <AboutComponent class="flex-1 bg-white p-6 shadow-md rounded-md" />
    
            <!-- Publications List -->
            <PubliComponent
              class="flex-1 bg-white p-6 shadow-md rounded-md"
              :numerPub="2"
            />
          </div>
          <LeaderComponent class="w-full rounded-md max-w-4xl" />
          <OurTeamComponent />
        </div>
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
    
    <style>
    </style>
    