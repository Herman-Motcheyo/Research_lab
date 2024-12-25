<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
       
        <div class="hidden md:flex items-center space-x-4">
         Group Flair-Pricnac
        </div>
        <div class="flex-1 flex items-center justify-center">
         
          <div class="flex items-center md:hidden">
            <button
              @click="toggleMenu"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        
          <div class="hidden md:flex md:space-x-8">
            <router-link
              to="/"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </router-link>
            <router-link
              to="/news"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              News
            </router-link>
            <router-link
              to="/publications"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Publications
            </router-link>
            <router-link
              to="/project"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Projects
            </router-link>
            <router-link
              to="/team"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Team
            </router-link>
            <router-link
              to="/gallery"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Gallery
            </router-link>
            <router-link
              to="/contact"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </router-link>
          </div>
        </div>

        <div class="flex items-center">
          <img
            class="h-8 w-8 rounded-full object-cover"
            src=""
            alt="Profile"
          />
        </div>
      </div>

    
      <div
        class="md:hidden"
        :class="isMenuOpen ? 'block' : 'hidden'"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            to="/"
            class="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Home
          </router-link>
          <router-link
            to="/news"
            class="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            News
          </router-link>
          <router-link
            to="/publications"
            class="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Publications
          </router-link>
          <router-link
            to="/project"
            class="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Projects
          </router-link>
          <router-link
            to="/team"
            class="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Team
          </router-link>
          <router-link
            to="/gallery"
            class="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Gallery
          </router-link>
          <router-link
            to="/contact"
            class="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>