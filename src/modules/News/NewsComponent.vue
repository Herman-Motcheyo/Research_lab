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
        <div
          v-for="news in displayedNews"
          :key="news.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
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
                <span class="text-gray-500 text-sm ml-4">{{ formatDate(news.date) }}</span>
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
import { computed, defineProps } from 'vue';

// Props for the component
const props = defineProps({
  numberPr: {
    type: Number,
    required: false,
    default: null, // Afficher tous les éléments si non défini
  },
});

// Data for the news items
const newsItems = [
  {
    id: 1,
    title: ' Call for abstract to 2nd International CGCA conference',
    summary: 'We are pleased to announce the call for abstracts for the 2nd International Conference on Computational Geometry and Computer Algorithms (CGCA). This prestigious event will bring together leading researchers, practitioners, and students to share and discuss cutting-edge developments in the field of computational geometry, algorithms, and their applications.',
    category: 'Events',
    date: '2024-12-10',
    image: require("@/assets/new/confe.jpg"),
    link: 'https://www.cacers.org/?lang=en',
  },
  {
    id: 2,
    title: 'Noel Flair-PRICNAC: Welcoming Prof. Joseph MARAE DJOUDA',
    summary: "We are delighted to announce that Prof. Joseph MARAE DJOUDA will join us for our traditional Noel Flair-PRICNAC celebration. Prof. Djouda's presence brings an added layer of prestige and significance to this cherished event, which aims to foster collaboration, celebrate achievements, and promote the spirit of innovation in our community.We look forward to an inspiring gathering as we celebrate the holiday season and the milestones we have achieved together. Prof. Djouda's participation will surely enhance the experience, and we are honored to host him for this occasion",
    category: 'Events',
    date: '2024-12-19',
    image: require("@/assets/new/Marae.png"),
    link: '#',
  },
  {
    id: 3,
    title: 'New Laboratory Equipment',
    summary: 'State-of-the-art characterization equipment installed in our facilities.',
    category: 'Infrastructure',
    date: '2023-12-05',
    image: '/api/placeholder/800/400',
    link: '#',
  },
];

// Computed property to determine displayed news
const displayedNews = computed(() => {
  // Sort news items by date descending
  const sortedNews = newsItems.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Return limited items if numberPr is specified
  return props.numberPr !== null ? sortedNews.slice(0, props.numberPr) : sortedNews;
});

// Helper function to format dates
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>
