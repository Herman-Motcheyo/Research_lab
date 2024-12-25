<template>
    <section class="py-8 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-6">Join Us</h2>
        <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700">Your Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                class="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const form = ref({
    name: "",
    email: "",
    message: "",
  });
  
  // Handle form submission
  function submitForm() {
    // Simulating sending the form data
    console.log("Form Submitted:", form.value);
  
    // Reset the form after submission
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  
    // Optionally show a success message
    alert("Your message has been sent successfully!");
  }
  </script>
  
  <style scoped>
  /* Optional: Add custom styles for the form */
  </style>
  