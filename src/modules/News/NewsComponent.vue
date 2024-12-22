<template>
    <section class="py-12">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
          <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
  
        <!-- News Grid -->
        <div class="space-y-6">
          <div v-for="news in newsItems" :key="news.id"
               class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div class="flex flex-col md:flex-row">
              <!-- News Image -->
              <div class="md:w-1/3">
                <div class="h-48 md:h-full bg-gray-200">
                  <img 
                    :src="news.image" 
                    :alt="news.title"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <!-- News Content -->
              <div class="md:w-2/3 p-6">
                <div class="flex items-center mb-4">
                  <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    {{ news.category }}
                  </span>
                  <span class="text-gray-500 text-sm ml-4">{{ news.date }}</span>
                </div>
                
                <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ news.title }}</h3>
                <p class="text-gray-600 mb-4">{{ news.summary }}</p>
                
                <div class="flex items-center">
                  <a :href="news.link" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Read More
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const newsItems = ref([
    {
      id: 1,
      title: 'New Research Grant Awarded',
      summary: 'Our team has secured a major grant for sustainable materials research.',
      category: 'Grants',
      date: 'Dec 15, 2023',
      image: '/api/placeholder/800/400',
      link: '#'
    },
    {
      id: 2,
      title: 'International Conference Success',
      summary: 'Team members presented groundbreaking research at the International Materials Conference.',
      category: 'Events',
      date: 'Dec 10, 2023',
      image: '/api/placeholder/800/400',
      link: '#'
    },
    {
      id: 3,
      title: 'New Laboratory Equipment',
      summary: 'State-of-the-art characterization equipment installed in our facilities.',
      category: 'Infrastructure',
      date: 'Dec 5, 2023',
      image: '/api/placeholder/800/400',
      link: '#'
    }
  ])
  </script>