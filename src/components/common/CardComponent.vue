<template>
  <div class="card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-4">
    <div v-if="imageUrl" class="w-full">
      <img :src="imageUrl" alt="Card Image" class="rounded-lg object-cover w-full h-48" />
    </div>
    <div>
      <h2 class="text-xl font-semibold text-gray-800 text-center">{{ title }}</h2>
    </div>
    <div>
      <p class="text-gray-600 text-center">{{ description }}</p>
    </div>
    <div>
      <button v-if="buttonText" @click="handleClick" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-500">
       <a :href="link"> {{buttonText}}</a>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
  },
  link: {
    type: String
  }
});

const handleClick = () => {
  console.log('Bouton cliqué !');
};
</script>

<style scoped>
</style>