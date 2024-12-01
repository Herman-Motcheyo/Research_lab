<template>
      <div>
            <CarouselComponent />

            <div>
                  <h1>Top project</h1>

                  <div class="card-project">
                        <CardComponent v-for="(card, index) in cards" :key="index" :title="card.title"
                              :description="card.description" :imageUrl="card.imageUrl" :buttonText="card.buttonText" />
                  </div>
            </div>
          <div class="group-leader">
            <div class="container">
                  <!-- About Section -->
                  <AboutComponent class="left-section" />

                  <!-- Publications List -->
                  <PubliComponent 
                        class="right-section"
                        :numerPub = 3 />
            </div>
            <div class='leader'>
                  <LeaderComponent />
            </div>
          </div>
      </div>
</template>

<script setup>
import CardComponent from '@/components/common/CardComponent.vue';
import CarouselComponent from '@/components/layout/CarouselComponent.vue';
import AboutComponent from '../about/AboutComponent.vue';
import PubliComponent from '../publications/PubliComponent.vue';
import LeaderComponent from '../about/LeaderComponent.vue';

const cards = [
      {
            title: "EEPER:MD PROJECT",
            description: "EEPER:MD - Economie D'Energie et Procédés Ecoresponsables dans La Production des Infracstructure en Afrique Centrale",
            imageUrl: require("@/assets/home/eepermd.png"),
            buttonText: "EEPER:MD Project"
      },
      {
            title: "Card 2",
            description: "EEPER:MD - Economie D'Energie et Procédés Ecoresponsables dans La Production des Infracstructure en Afrique Centrale",
            imageUrl: require("@/assets/home/download.jpeg"),
            buttonText: "Flair Project"
      },

];


</script>
<style>
.card-project {
      display: flex;
      justify-content: center;
      flex-direction: row;

}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: #f8f9fa;
}

.left-section {
  flex: 1;
  min-width: 300px;
  max-width: 33%;
  background-color: white;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.right-section {
  flex: 2;
  min-width: 300px;
  max-width: 66%;
  background-color: white;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
</style>