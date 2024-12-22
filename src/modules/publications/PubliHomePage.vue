<template>
  <section class="space-y-8 max-w-4xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">
        Publications
      </h2>
      <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
    </div>

    <!-- Publications List -->
    <div class="space-y-6">
      <div 
        v-for="(publication, index) in publications" 
        :key="index" 
        v-show="index < numerPub" 
        class="bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100"
      >
        <div class="p-6">
          <!-- Publication Header -->
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-sm">
                <span class="text-xl">{{ index + 1 }}</span>
              </div>
            </div>
            <div class="flex-grow">
              <h3 class="text-xl font-semibold text-gray-800 leading-tight mb-3 hover:text-blue-600 transition-colors">
                {{ publication.title }}
              </h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                  Research Article
                </span>
                <span class="inline-block bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">
                  {{ new Date().getFullYear() }}
                </span>
              </div>
            </div>
          </div>

          <!-- Authors -->
          <div class="mb-4">
            <h4 class="text-sm font-semibold text-gray-600 mb-2">Authors</h4>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ publication.authors }}
            </p>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <a 
              :href="publication.link" 
              target="_blank"
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <span>View Publication</span>
              <svg 
                class="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <span class="text-sm text-gray-500">Published</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  numerPub: {
    type: Number,
    required: true
  }
})

const publications = ref([
  {
    title: 'Enhancing hygroscopic capacities of metakaolin based porous insulating geopolymers: Comparative effects of calcium silicate and sodium polyacrylate',
    authors: 'Elie Kamseu, Zénabou NM Ngouloure, Lauraine K Tiogning-Djiogue et al.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S2352710223001997',
  },
  {
    title: 'Natural iron-aluminosilicate as potential solid precursor for supplementary cementitious materials: A comparative study with other aluminosilicates',
    authors: 'Joelle Nadia Nouping Fekoua, Paul Venyite, Seunkole Bila, Elie Kamseu, et al.',
    link: 'https://www.sciencedirect.com/science/article/pii/S2405844023049587#ack0010',
  },
  {
    title: 'Performances of laterite-based geopolymer matrice filters on the bacteriological filtration of contaminated groundwater and microstructure',
    authors: 'Linda Lekuna Duna, Cyriaque Rodrigue Kaze, Joelle Nadia Nouping Fekoua et al.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S2214714423002180',
  }
])
</script>