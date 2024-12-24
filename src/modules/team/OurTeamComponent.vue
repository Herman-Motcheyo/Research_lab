<template>
   <section class="py-12 bg-gradient-to-b from-white to-gray-50">
     <div class="container mx-auto px-4">
       <!-- Section Header -->
       <div class="text-center mb-12">
         <h2 class="text-3xl font-bold text-gray-900 mb-4">Some Members</h2>
         <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
       </div>
 
       
       <div class="flex space-x-10 items-center justify-center text-center">
         <div v-for="member in members" :key="member.id"  
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ">
          
           <div class="h-64 w-full overflow-hidden bg-gray-200">
             <img 
               :src="member.image" 
               :alt="member.name"
               class="w-full h-full object-cover"
             />
           </div>
           
          
           <div class="p-6">
             <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ member.name }}</h3>
             <p class="text-blue-600 font-medium mb-2">{{ member.role }}</p>
             <p class="text-gray-600 text-sm mb-4">{{ member.description }}</p>
             
             <!-- Social Links -->
             <div class="flex space-x-4">
               <a v-if="member.email" :href="'mailto:' + member.email" 
                  class="text-gray-600 hover:text-blue-600 transition-colors">
                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                 </svg>
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </template>
 
 <script setup>
 import { ref } from 'vue'
 
 const members = ref([
   
   {
     id: 2,
     name: 'Mr. Herman Tcheneghon Motcheyo',
     role: 'Assistant Researcher',
     description: 'Specializes in Artificial intelligence and Machine Learning.',
     image: require('@/assets/home/team/herman.jpeg'),
     email: 'hermanmotcheyo@gmail.com'
   },
   {
     id: 3,
     name: 'Dr. Tiogning Lauraine',
     role: 'Research Associate, Senior Lecturer at ENSPY',
     description: 'Focus on artificial intelligence in material science.',
     image: require('@/assets/home/team/tiogning.jpeg'),
     email: 'ltiogning@gmail.com'
   },
  
 ])
 </script>