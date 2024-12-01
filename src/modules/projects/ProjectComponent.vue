<template>
    <div>
      <h1>Liste des Cartes Dynamiques</h1>
  
      <!-- Boucle à travers un tableau de données pour générer des cartes dynamiques -->
      <CardComponent
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :imageUrl="card.imageUrl"
        :buttonText="card.buttonText"
      />
    </div>
  </template>
  
  <script setup>
  import CardComponent from '@/components/common/CardComponent.vue';
  
  // Exemple de données dynamiques
  const cards = [
    {
      title: "Card 1",
      description: "Description pour la première carte.",
      imageUrl: "https://via.placeholder.com/300x150",
      buttonText: "Détails"
    },
    {
      title: "Card 2",
      description: "Deuxième carte avec un contenu différent.",
      imageUrl: "https://via.placeholder.com/300x150",
      buttonText: "Lire Plus"
    },
    {
      title: "Card 3",
      description: "Troisième carte sans bouton.",
      imageUrl: "",
      buttonText: ""
    }
  ];


  </script>
  
  <style>

</style>