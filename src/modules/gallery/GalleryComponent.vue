
<template>
    <div class="gallery">
      <div class="text-center mb-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
      
      <!-- Grille des miniatures -->
      <div class="gallery-grid">
        <div 
          v-for="image in images" 
          :key="image.id"
          class="gallery-item"
          @click="openModal(image)"
        >
          <img 
            :src="image.src" 
            :alt="image.title"
            class="gallery-thumbnail"
          >
          <div class="gallery-item-overlay">
            <h3>{{ image.title }}</h3>
          </div>
        </div>
      </div>
  
      <!-- Modal pour l'affichage en plein écran -->
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <button class="close-button" @click="closeModal">&times;</button>
          
          <div class="modal-image-container">
            <button class="nav-button prev" @click="showPreviousImage">&lt;</button>
            
            <img 
              :src="selectedImage.src" 
              :alt="selectedImage.title"
              class="modal-image"
            >
            
            <button class="nav-button next" @click="showNextImage">&gt;</button>
          </div>
          
          <div class="image-info">
            <h3>{{ selectedImage.title }}</h3>
            <p>{{ selectedImage.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue'

const images = ref([
  {
    id: 1,
    src: require("@/assets/home/slide1.jpg"),
    title: 'Weekly Meeting',
    description: '#'
  },
  {
    id: 2,
    src: require("@/assets/home/slide2.jpg"),
    title: 'After Cacers Workshop',
    description: '#'
  },
])

const selectedImage = ref(null)
const isModalOpen = ref(false)

const openModal = (image) => {
  selectedImage.value = image
  isModalOpen.value = true
}

const closeModal = () => {
  selectedImage.value = null
  isModalOpen.value = false
}

// Gestion des touches du clavier pour la navigation
const handleKeydown = (event) => {
  if (!isModalOpen.value) return
  
  if (event.key === 'Escape') {
    closeModal()
  } else if (event.key === 'ArrowRight') {
    showNextImage()
  } else if (event.key === 'ArrowLeft') {
    showPreviousImage()
  }
}

// Navigation entre les images
const showNextImage = () => {
  const currentIndex = images.value.findIndex(img => img.id === selectedImage.value.id)
  const nextIndex = (currentIndex + 1) % images.value.length
  selectedImage.value = images.value[nextIndex]
}

const showPreviousImage = () => {
  const currentIndex = images.value.findIndex(img => img.id === selectedImage.value.id)
  const previousIndex = currentIndex === 0 ? images.value.length - 1 : currentIndex - 1
  selectedImage.value = images.value[previousIndex]
}

// Ajout des event listeners au montage du composant
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})
</script>


<style scoped>
.gallery {
  padding: 2rem;
}

.gallery-title {
  text-align: center;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.gallery-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.gallery-item-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-item-overlay {
  transform: translateY(0);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.close-button {
  position: absolute;
  top: -40px;
  right: -40px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.modal-image-container {
  position: relative;
  display: flex;
  align-items: center;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 1rem;
  cursor: pointer;
  border-radius: 50%;
}

.nav-button.prev {
  left: -60px;
}

.nav-button.next {
  right: -60px;
}

.image-info {
  color: white;
  text-align: center;
  margin-top: 1rem;
}

.image-info h3 {
  margin: 0;
}

@media (max-width: 768px) {
  .nav-button {
    padding: 0.5rem;
  }
  
  .nav-button.prev {
    left: -30px;
  }
  
  .nav-button.next {
    right: -30px;
  }
  
  .close-button {
    top: -30px;
    right: -30px;
  }
}
</style>