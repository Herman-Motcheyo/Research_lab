<template>
  <section class="py-8 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Past and Current Projects</h2>
        <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <!-- Project List -->
      <ul class="space-y-6">
        <li
          v-for="project in sortedProjects"
          :key="project.id"
          class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-semibold text-gray-800">
            <a
              :href="project.link"
              class="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ project.title }}
            </a>
          </h3>
          <p class="text-gray-600 mt-2">{{ project.description }}</p>
          <p class="text-sm text-gray-500 mt-1">Duration: {{ project.duration }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const projects = ref([
  {
    id: 1,
    title: "EEPER:MD - Energy Efficiency and Eco-Responsible Processes in Infrastructure Production in Central Africa",
    description:
      "The Promotion of Research, Innovation, and Digital Culture in Central Africa (PRICNAC) aims to strengthen research and innovation capacities in Central African countries by consolidating innovation ecosystems and promoting sustainable development.",
    duration: "2023-2027",
    link: "https://eeper-site.vercel.app/",
  },
  {
    id: 2,
    title: "Future Leaders – African Independent Research (FLAIR) Fellowship",
    description:
      "FLAIR Fellowships are awarded to talented African early-career researchers with the potential to become leaders in their fields. The program supports independent research careers in sub-Saharan African institutions, focusing on cutting-edge scientific research addressing global challenges.",
    duration: "2020-2023",
    link: "https://royalsociety.org/news/2020/05/african-academy-of-sciences-and-royal-society-announce-recipients-of-2020-flair-fellowships/",
  },
  {
    id: 3,
    title:
      "Program for Identification of Raw Materials and Appropriate Technologies",
    description:
      "Coordinated by MINRESI/MIPROMALO, this program focuses on identifying raw materials and suitable technologies for their transformation to promote local development.",
    duration: "Since 2017",
    link: "#", // Replace with actual link if available
  },

  {
    id: 4,
    title: "TWAS Projects",
    description:
      "Research programs supported by The World Academy of Sciences (TWAS), conducted in multiple phases to advance scientific knowledge.",
    duration: "2013-2015, 2016-2019",
    link: "https://twas.org/", // General link to TWAS
  },
  {
    id: 5,
    title: "AUF Projects",
    description:
      "Supported by the Agence Universitaire de la Francophonie (AUF) in two phases, these projects aim to promote higher education and research in the Francophone world.",
    duration: "2015-2017, 2018-2020",
    link: "https://www.auf.org/", 
  },
]);

// Sort the projects by duration (most recent to oldest)
const sortedProjects = computed(() =>
  projects.value.sort((a, b) => {
    const dateA = a.duration.split("–").pop().split("-").pop().trim();
    const dateB = b.duration.split("–").pop().split("-").pop().trim();
    return parseInt(dateB) - parseInt(dateA);
  })
);
</script>

<style scoped>
/* Optional: Add your custom styles here */
</style>
