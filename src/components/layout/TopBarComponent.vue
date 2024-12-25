<template>
    <div class="top">
      <!-- Section gauche avec icônes des réseaux sociaux -->
      <div class="topLeft">
        <i class="topIcon fab fa-facebook-square"></i>
        <i class="topIcon fab fa-instagram-square"></i>
        <i class="topIcon fab fa-pinterest-square"></i>
        <i class="topIcon fab fa-twitter-square"></i>
      </div>
  
      <!-- Section centrale avec les liens de navigation -->
      <div class="topCenter">
        <div class="topList" :class="{ 'is-open': isMenuOpen }">
          <div class="topListItem">
            <router-link to="/">Home</router-link>
          </div>
          <div class="topListItem">
            <router-link to="/news">News</router-link>
          </div>
          <div class="topListItem">
            <router-link to="/publications">Publications</router-link>
          </div>
          <div class="topListItem">
            <router-link to="/project">Projects</router-link>
          </div>
          <div class="topListItem">
            <router-link to="/team">Team</router-link>
          </div>
          <div class="topListItem">
            <router-link to="/gallery">Gallery</router-link>
          </div>
          <div class="topListItem">
            <router-link to="/contact">Contact</router-link>
          </div>
         
        </div>
  
        <!-- Bouton hamburger pour menu mobile -->
        <button class="menu-toggle" @click="toggleMenu">☰</button>
      </div>
  
      <!-- Section droite avec l'image (photo de profil ou logo) -->
      <div class="topRight">
        <img src="" class="topImg" alt="Profile">
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <style>
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 10px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 999;
    font-family: "Josefin Sans", sans-serif;
  }
  
  .topLeft,
  .topRight {
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: center;
  }
  
  .topIcon {
    font-size: 20px;
    margin-right: 10px;
    color: #444;
    cursor: pointer;
  }
  
  .topCenter {
    display: flex;
    flex: 6;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .topList {
    display: flex;
    gap: 20px;
    transition: max-height 0.3s ease;
  }
  
  .topListItem {
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
  }

  a{
    list-style: none;
    text-decoration: none;
    font-weight: 500;
  }
  
  /* Style du bouton hamburger */
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    margin-left: 15px;
  }
  
  /* Image de profil ou logo */
  .topImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
  
  /* Responsivité pour les écrans de moins de 768px */
  @media (max-width: 768px) {
    .top {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .topLeft {
      display: none; /* Masquer les icônes sociales sur mobile */
    }
  
    .topCenter {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .menu-toggle {
      display: block; /* Afficher le bouton hamburger */
    }
  
    .topList {
      display: none; /* Masquer le menu par défaut sur mobile */
      flex-direction: column;
      width: 100%;
    }
  
    .topList.is-open {
      display: flex; /* Afficher le menu quand il est ouvert */
    }
  }
  </style>
  