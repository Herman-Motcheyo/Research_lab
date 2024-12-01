<template>
  <div class="card">
    <div><img v-if="imageUrl" :src="imageUrl" alt="Card Image" class="card-image" /></div>
    <div>
      <h2 class="card-title">{{ title }}</h2>
    </div>
    <div>
      <p class="card-description">{{ description }}</p>
    </div>
    <div> <button v-if="buttonText" @click="handleClick" class="card-button">
        {{ buttonText }}
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
  }
});


const handleClick = () => {
  console.log('Bouton cliqué !');
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 20%;
  text-align: center;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 10px;

}

.card-title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

a {
  font-weight: 400;
  list-style: none;
}

.card-description {
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
}

.card-button {
  padding: 10px 15px;
  background-color: #551A8B;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.card-button:hover {
  background-color:#551A8B;
}
</style>