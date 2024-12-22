<template>
    <section class="py-12 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Research Team</h2>
          <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
  
        <!-- Dynamic Sections -->
        <div v-for="(team, section) in teamCategories" :key="section" class="mb-16">
          <!-- Section Title -->
          <h3 class="text-2xl font-semibold text-gray-800 mb-8">{{ sectionTitles[section] }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="member in team"
              :key="member.id"
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
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
                  <a
                    v-if="member.email"
                    :href="'mailto:' + member.email"
                    class="text-gray-600 hover:text-blue-600 transition-colors"
                  >
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
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const teamCategories = ref({
    staff: [
      {
        id: 1,
        name: "Dr. Nadia Fonkoua",
        role: "Principal Investigator",
        description: "Expert in materials science with 15 years of research experience.",
        image: require("@/assets/home/team/nadia.jpeg"),
        email: "nadia.fonkoua@university.edu",
      },
      {
        id: 2,
        name: "Dr. Linda Lekuna",
        role: "Research Associate",
        description: "Focus on artificial intelligence in material science.",
        image: require("@/assets/home/team/tiogning.jpeg"),
        email: "#",
      },
      {
        id: 2,
        name: "Mme Thiophile",
        role: "Research Associate",
        description: "Focus on artificial intelligence in material science.",
        image: require("@/assets/home/team/tiogning.jpeg"),
        email: "#",
      },
    ],
    phdStudents: [
      {
        id: 3,
        name: "Mr. Herman Tcheneghon Motcheyo",
        role: "PhD Candidate",
        description: "Specializes in Artificial Intelligence and Machine Learning.",
        image: require("@/assets/home/team/herman.jpeg"),
        email: "hermanmotcheyo@gmail.com",
      },{
        id: 5,
        name: "Mr. Franck Djadjeu",
        role: "PhD Candidate",
        description: "Specializes particle packing to enhance compressive strengh of concrete",
        image: require("@/assets/home/team/herman.jpeg"),
        email: "hermanmotcheyo@gmail.com",
      },{
        id: 6,
        name: "Mr. Herman Tcheneghon Motcheyo",
        role: "PhD Candidate",
        description: "Specializes in Artificial Intelligence and Machine Learning.",
        image: require("@/assets/home/team/herman.jpeg"),
        email: "hermanmotcheyo@gmail.com",
      },{
        id: 7,
        name: "Mr. Herman Tcheneghon Motcheyo",
        role: "PhD Candidate",
        description: "Specializes in Artificial Intelligence and Machine Learning.",
        image: require("@/assets/home/team/herman.jpeg"),
        email: "hermanmotcheyo@gmail.com",
      },{
        id: 3,
        name: "Mr. Herman Tcheneghon Motcheyo",
        role: "PhD Candidate",
        description: "Specializes in Artificial Intelligence and Machine Learning.",
        image: require("@/assets/home/team/herman.jpeg"),
        email: "hermanmotcheyo@gmail.com",
      },
    ],
    masterStudents: [
      {
        id: 4,
        name: "Monthé Borel",
        role: "Master's Student",
        description: "Working on sustainable materials with AI-based models.",
        image: "/api/placeholder/400/500",
        email: "jane.doe@university.edu",
      },{
        id: 4,
        name: "Latieu Steve",
        role: "Master's Student",
        description: "Working on sustainable materials with AI-based models.",
        image: "/api/placeholder/400/500",
        email: "jane.doe@university.edu",
      },
    ],
    alumni: [
      {
        id: 5,
        name: "Djioro Magon Christa",
        role: "Former Postdoctoral Researcher",
        description: "Expert in material characterization and analysis.",
        image: "/api/placeholder/400/500",
        email: "kaze.rodrique@university.edu",
      },
      {
        id: 5,
        name: "Dr. Kaze Rodrique",
        role: "Former Postdoctoral Researcher",
        description: "Expert in material characterization and analysis.",
        image: "/api/placeholder/400/500",
        email: "kaze.rodrique@university.edu",
      },
    ],
  });
  
  const sectionTitles = {
    staff: "Staff",
    phdStudents: "PhD Students",
    masterStudents: "Master Students",
    alumni: "Alumni",
  };
  </script>
  