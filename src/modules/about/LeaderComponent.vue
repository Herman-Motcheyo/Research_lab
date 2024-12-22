<template>
  <section class="container mx-auto px-4 py-12">
    <!-- Section Title -->
    <h1 class="text-3xl font-bold text-center mb-16 text-gray-900">
      Group Leader
      <div class="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
    </h1>

    <div class="flex flex-col md:flex-row justify-between gap-12">
      <!-- Left Section: Profile -->
      <div class="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <div class="w-full max-w-md">
          <!-- Placeholder image with aspect ratio -->
          <div class="w-full h-96 bg-gray-200 mb-6">
            <img 
              :src="groupLeader.imageUrl"
              :alt="groupLeader.name"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Name and title -->
          <h2 class="text-2xl font-bold mb-2 text-gray-900">{{ groupLeader.name }}</h2>
          <p class="text-lg text-gray-600 mb-4">{{ groupLeader.title }}</p>
        </div>
      </div>

      <!-- Right Section: Timeline -->
      <div class="w-full md:w-1/2">
        <h3 class="text-xl font-semibold mb-8 text-gray-900">Educational Background</h3>
        <div class="space-y-8">
          <!-- Timeline Items -->
          <div 
            v-for="(item, index) in timeline" 
            :key="index" 
            class="relative pl-8 border-l-2 border-blue-500"
          >
            <div class="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2"></div>
            <div class="mb-1">
              <span class="text-sm font-semibold text-blue-600">{{ item.year }}</span>
            </div>
            <h4 class="text-lg font-medium text-gray-900 mb-1">{{ item.degree }}</h4>
            <p class="text-gray-600">{{ item.institution }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'



// Group leader information
const groupLeader = ref({
  name: 'Prof. Elie Kamseu',
  title: 'Professor of Chemistry',
  imageUrl: require('@/assets/home/prof.png')  
})

// Timeline data
const timeline = ref([
{
    year: '2015 - 2020',
    degree: 'Ph.D. in Chemistry',
    institution: 'University of Yaoundé 1, Cameroon'
  },
  {
    year: '2015 - 2020',
    degree: 'Ph.D. in Chemistry',
    institution: 'University of Yaoundé 1, Cameroon'
  },
  {
    year: '2013 - 2015',
    degree: 'M.Sc. in Chemistry',
    institution: 'University of Yaoundé 1, Cameroon'
  },
  {
    year: '2009 - 2013',
    degree: 'B.Sc. in Chemistry',
    institution: 'University of Yaoundé 1, Cameroon'
  }])


</script>
