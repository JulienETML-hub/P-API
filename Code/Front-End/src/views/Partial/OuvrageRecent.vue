<template>
  <div class="livres-container">
    <div class="livre" v-for="livre in livres" :key="livre.id">
      <h2>{{ livre.titre }}</h2>
      <!-- Affichez plus d'informations sur le livre ici -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'OuvrageRecent',
  data() {
    return {
      livres: []
    }
  },
  async created() {
    const response = await axios.get('http://localhost:3000/api/livres/recent')
    this.livres = response.data.slice(0, 5)
  }
}
</script>

<style scoped>
.livres-container {
  display: flex;
  justify-content: space-between;
}

.livre {
  width: 20%; /* Ajustez cette valeur en fonction de vos besoins */
}
</style>