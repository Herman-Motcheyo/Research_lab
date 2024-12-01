<template>
    <div class="about">
      <div class="group-leader">
        <p>Group leader</p>
      </div>
      <div class="info">
        <div class="prof-image">
          <img class="image" :src="leader" alt="Leader image" />
          <div class="image-name">
            <p class="full-name">Pr Elie Kamseu</p>
            <p class="short-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati commodi alias. Corporis enim porro nemo, id autem, dolore doloribus quos ratione maxime, ex labore maiores repudiandae aut illo expedita!
            </p>
          </div>
        </div>
        <div class="prof-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus earum a ipsum inventore qui expedita nulla, error architecto unde, officia quasi doloremque omnis dolorum cum esse suscipit fuga iure ut?
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  
  import leaderImage from '@/assets/home/prof.png';
  const leader = ref(leaderImage);
  </script>
  

<style>

.group-leader {
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
}

.info {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;
  margin: 10px;
  border-radius: 5px;
  flex-wrap: wrap; /* Pour la responsivité */
}

/* Image et texte */
.prof-image {
  border-radius: 15px;
  background-color: #f4f4f4;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  text-align: center;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.image-name {
  margin-top: 10px;
}

.full-name {
  font-size: 1.2rem;
  font-weight: bold;
}

.short-description {
  font-size: 0.9rem;
  color: #555;
}

/* Description */
.prof-description {
  max-width: 600px;
  line-height: 1.6;
  color: #333;
}

/* Responsivité */
@media (max-width: 768px) {
  .info {
    flex-direction: column;
    align-items: center;
  }

  .prof-image {
    max-width: 100%;
  }

  .prof-description {
    text-align: justify;
  }
}

</style>